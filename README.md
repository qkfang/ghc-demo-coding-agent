# gh-coding-agent

## Object Detection and Distance Calculation

This repository contains a Python script that detects objects in images and calculates distances between them on a 2D plane, treating the surface as a flat table. The system now supports **real-world object detection** in complex environments with patterned backgrounds.

### Features

- **Multiple Detection Methods**: Color-based detection, template matching, and **YOLO deep learning** for real-world objects
- **Real-world Object Recognition**: Detect apples, toy cars, water bottles, and 80+ other object types
- **Complex Background Handling**: Advanced preprocessing to work with noisy, patterned backgrounds
- **Distance Calculation**: Computes Euclidean distances between detected objects
- **2D Coordinate System**: Maps objects to a 2D coordinate system with origin at bottom-left
- **Orientation Detection**: Determines object facing direction (North, South, East, West)
- **Visualization**: Generates visual output showing detected objects and distances
- **JSON Output**: Provides structured data output for further processing

### Detection Methods

1. **YOLO Deep Learning** (NEW): Detects real-world objects like fruits, vehicles, electronics, animals, etc.
2. **Enhanced Color Detection**: Improved noise reduction for complex backgrounds
3. **Template Matching**: Match specific template images

### Installation

1. Clone the repository:
```bash
git clone https://github.com/qkfang/gh-coding-agent.git
cd gh-coding-agent
```

2. Install basic dependencies:
```bash
pip install -r requirements.txt
```

3. For YOLO detection (real-world objects), install additional dependencies:
```bash
pip install ultralytics torch torchvision
```

### Quick Start

#### Detect Real-world Objects (Recommended)
```bash
# Detect fruits on a table
python3 object_detector.py kitchen_photo.jpg --method yolo --target-objects apple banana orange

# Detect vehicles in a parking lot  
python3 object_detector.py parking.jpg --method yolo --target-objects car truck motorcycle

# Detect bottles and containers
python3 object_detector.py table_scene.jpg --method yolo --target-objects bottle cup bowl
```

#### Color-based Detection (Works with simple colored objects)
```bash
# Basic color detection with noise reduction
python3 object_detector.py image.jpg --method color

# Test with included sample
python3 object_detector.py sample_image.jpg
```

### Advanced Usage

#### YOLO Detection Options
```bash
# Detect all objects with high confidence
python3 object_detector.py complex_scene.jpg --method yolo --confidence 0.7

# Save results and visualization
python3 object_detector.py image.jpg --method yolo --output results.json --visualize output.png

# Specify pixels per unit for real-world measurements
python3 object_detector.py image.jpg --method yolo --pixels-per-unit 10.0
```

#### Color Detection Options
```bash
# Disable noise reduction for clean images
python3 object_detector.py clean_image.jpg --method color --no-preprocessing

# Save results to JSON file
python3 object_detector.py image.jpg --method color --output results.json
```

#### Template Matching
```bash
# Use template matching instead of other methods
python3 object_detector.py image.jpg --method template --templates template1.jpg template2.jpg
```

#### Examples and Demos
```bash
# Run examples showing different use cases
python3 real_world_example.py

# Run without displaying visualization
python3 object_detector.py image.jpg --no-display
```

### Supported Objects (YOLO Method)

The YOLO detection method can identify 80+ objects including:

**Food & Kitchen**: apple, banana, orange, carrot, bottle, cup, bowl, fork, knife, spoon
**Electronics**: cell_phone, microwave, oven, toaster, tv, laptop, mouse, keyboard  
**Vehicles**: car, truck, bus, motorcycle, bicycle, airplane, boat, train
**Animals**: dog, cat, horse, cow, elephant, bird, sheep, bear, zebra
**Sports**: sports_ball, frisbee, tennis_racket, baseball_bat, skateboard, surfboard
**Household**: book, clock, vase, chair, couch, bed, toilet, sink, refrigerator

For a complete list, run: `python3 real_world_example.py`

### Output Format

The script provides detailed analysis including:

- **Object Information**: Position, area, orientation, and facing direction
- **Distance Measurements**: Pixel distances and real-world units
- **2D Coordinate System**: Bottom-left origin with y-axis pointing up
- **Visualization**: Annotated image showing objects and distances

Example JSON output:
```json
{
  "image_dimensions": [800, 600],
  "coordinate_system": "2D with origin at bottom-left, y-axis pointing up",
  "objects": [
    {
      "id": 0,
      "name": "red_object",
      "position_2d": [150, 450],
      "orientation_degrees": 1.06,
      "facing_direction": "East"
    }
  ],
  "distances": [
    {
      "object1": "red_object",
      "object2": "blue_object",
      "distance_units": 450.0,
      "object1_position": [150, 450],
      "object2_position": [600, 450]
    }
  ]
}
```

### Technical Details

#### Detection Methods

1. **YOLO Deep Learning**: Uses YOLOv8 neural network to detect real-world objects with high accuracy
2. **Enhanced Color Detection**: HSV color space detection with noise reduction for complex backgrounds  
3. **Template Matching**: Matches template images using normalized cross-correlation

#### Distance Calculation

- Uses Euclidean distance formula: `√((x₂-x₁)² + (y₂-y₁)²)`
- Supports conversion from pixels to real-world units via `pixels-per-unit` parameter
- Assumes objects are on a flat 2D surface (table-like)

#### Coordinate System

- Origin (0,0) at bottom-left corner of image
- X-axis increases rightward
- Y-axis increases upward
- Object positions reported in this coordinate system

### Requirements

**Basic Requirements:**
- Python 3.7+
- OpenCV 4.8.0+
- NumPy 1.24.0+
- Matplotlib 3.7.0+
- Pillow 10.0.0+

**For YOLO Detection:**
- ultralytics 8.0.0+
- torch 1.13.0+
- torchvision 0.14.0+

**Note**: YOLO detection will automatically download the YOLOv8 model on first use (~6MB)

### Contributing

Feel free to submit issues and enhancement requests!