import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'dart:io'; // For File
import 'package:http/http.dart' as http; // For making HTTP requests
import 'dart:convert'; // For JSON encoding and decoding
import 'package:http_parser/http_parser.dart'; // For MediaType

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: PlantDiseaseClassifierScreen(),
    );
  }
}

class PlantDiseaseClassifierScreen extends StatefulWidget {
  @override
  _PlantDiseaseClassifierScreenState createState() =>
      _PlantDiseaseClassifierScreenState();
}

class _PlantDiseaseClassifierScreenState
    extends State<PlantDiseaseClassifierScreen> {
  PickedFile? _imageFile;
  final ImagePicker _picker = ImagePicker();
  String? _predictionResult;

  Future<void> _pickImage() async {
    final pickedFile = await _picker.getImage(source: ImageSource.gallery);
    setState(() {
      _imageFile = pickedFile;
    });
  }

  Future<void> _predictDisease() async {
    if (_imageFile == null) return;

    final uri = Uri.parse('http://10.0.2.2:8000/predict/');
    final request = http.MultipartRequest('POST', uri)
      ..headers.addAll({
        'Content-Type': 'multipart/form-data',
      })
      ..files.add(await http.MultipartFile.fromPath(
        'file',
        _imageFile!.path,
        contentType:
            MediaType('image', 'jpeg'), // Adjust content type as needed
      ));

    try {
      final response = await request.send();
      if (response.statusCode == 200) {
        final responseData = await response.stream.bytesToString();
        final decodedData = json.decode(responseData);
        setState(() {
          _predictionResult =
              'Disease: ${decodedData['predicted_disease']}, Probability: ${double.parse(decodedData['probability']).toStringAsFixed(2)}';
        });
      } else {
        setState(() {
          _predictionResult = 'Error: ${response.reasonPhrase}';
        });
      }
    } catch (e) {
      setState(() {
        _predictionResult = 'Error: $e';
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Plants Disease Classifier with AI'),
        centerTitle: true,
      ),
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Text(
                'Choose an Image for Testing...',
                style: TextStyle(
                    fontSize: 16,
                    fontWeight: FontWeight.bold,
                    color: Color.fromARGB(230, 12, 239, 20)),
              ),
              SizedBox(height: 20),
              GestureDetector(
                onTap: _pickImage,
                child: Container(
                  width: double.infinity,
                  height: 150,
                  decoration: BoxDecoration(
                    color: Colors.grey[300],
                    borderRadius: BorderRadius.circular(10),
                  ),
                  child: _imageFile == null
                      ? Column(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Icon(Icons.cloud_upload, size: 50),
                            SizedBox(height: 10),
                            Text('Drag and drop Image here'),
                          ],
                        )
                      : Image.file(File(_imageFile!.path)),
                ),
              ),
              // SizedBox(height: 20),
              // ElevatedButton(
              //   onPressed: _pickImage,
              //   child: Text('Browse Image'),
              // ),
              SizedBox(height: 20),
              ElevatedButton(
                onPressed: _predictDisease,
                style: ElevatedButton.styleFrom(backgroundColor: Colors.green),
                child: Text(
                  'Predict',
                  style: TextStyle(fontWeight: FontWeight.bold),
                ),
              ),
              SizedBox(height: 20),
              _predictionResult != null
                  ? Text(
                      _predictionResult!,
                      style:
                          TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
                    )
                  : Container(),
            ],
          ),
        ),
      ),
    );
  }
}
