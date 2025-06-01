# gh-coding-agent

## Object Detection and Distance Calculation

This repository contains a Python script that detects objects in images and calculates distances between them on a 2D plane, treating the surface as a flat table.

### Features

- **Object Detection**: Supports color-based detection and template matching
- **Distance Calculation**: Computes Euclidean distances between detected objects
- **2D Coordinate System**: Maps objects to a 2D coordinate system with origin at bottom-left
- **Orientation Detection**: Determines object facing direction (North, South, East, West)
- **Visualization**: Generates visual output showing detected objects and distances
- **JSON Output**: Provides structured data output for further processing

### Installation

1. Clone the repository:
```bash
git clone https://github.com/qkfang/gh-coding-agent.git
cd gh-coding-agent
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

### Usage

#### Basic Usage

Detect objects using color-based detection:
```bash
python3 object_detector.py image.jpg
```

#### Advanced Options

```bash
# Save results to JSON file
python3 object_detector.py image.jpg --output results.json

# Save visualization
python3 object_detector.py image.jpg --visualize output.png

# Specify pixels per unit for real-world measurements
python3 object_detector.py image.jpg --pixels-per-unit 10.0

# Use template matching instead of color detection
python3 object_detector.py image.jpg --method template --templates template1.jpg template2.jpg

# Run without displaying visualization
python3 object_detector.py image.jpg --no-display
```

#### Using Sample Image

Test with the included sample image:
```bash
python3 object_detector.py sample_image.jpg
```

#### Creating Test Images

Use the included test image generator:
```bash
python3 create_test_image.py
python3 object_detector.py test_image.jpg
```

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

1. **Color-based Detection**: Uses HSV color space to detect objects based on predefined color ranges
2. **Template Matching**: Matches template images against the input image using normalized cross-correlation

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

- Python 3.7+
- OpenCV 4.8.0+
- NumPy 1.24.0+
- Matplotlib 3.7.0+
- Pillow 10.0.0+

### Contributing

Feel free to submit issues and enhancement requests!