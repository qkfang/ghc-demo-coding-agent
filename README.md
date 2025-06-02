# gh-coding-agent

## Object Detection and Movement Tracking

This repository contains a comprehensive Python system for detecting objects in images and tracking their movements across multiple photos taken from the same location. The system supports both **real-world object detection** in complex environments and **temporal tracking** for movement analysis.

### Features

#### Object Detection
- **Multiple Detection Methods**: Color-based detection, template matching, and **YOLO deep learning** for real-world objects
- **Real-world Object Recognition**: Detect apples, toy cars, water bottles, and 80+ other object types
- **Complex Background Handling**: Advanced preprocessing to work with noisy, patterned backgrounds
- **Distance Calculation**: Computes Euclidean distances between detected objects
- **2D Coordinate System**: Maps objects to a 2D coordinate system with origin at bottom-left
- **Orientation Detection**: Determines object facing direction (North, South, East, West)
- **Visualization**: Generates visual output showing detected objects and distances
- **JSON Output**: Provides structured data output for further processing

#### Movement Tracking (NEW)
- **Multi-Image Analysis**: Process sequences of photos taken from the same location
- **Object Tracking**: Track object movements across multiple frames using advanced matching algorithms
- **Movement Analysis**: Calculate distances moved, average speeds, and trajectories
- **Virtual Map Visualization**: Display object movement paths on an interactive map
- **Temporal Data**: Export detailed tracking data with timestamps and position history
- **Object Lifecycle**: Handle objects that appear, disappear, or move in/out of frame
- **Customizable Parameters**: Adjustable distance thresholds and tracking sensitivity

### Detection Methods

1. **YOLO Deep Learning**: Detects real-world objects like fruits, vehicles, electronics, animals, etc.
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

3. For YOLO detection (real-world objects), dependencies are already included in requirements.txt

### Quick Start

#### Single Image Detection
```bash
# Detect fruits on a table
python3 object_detector.py kitchen_photo.jpg --method yolo --target-objects apple banana orange

# Color-based detection with sample image
python3 object_detector.py sample_image.jpg --method color
```

#### Movement Tracking (NEW)
```bash
# Track colored objects across multiple photos
python3 object_tracker.py photo1.jpg photo2.jpg photo3.jpg --method color --visualize movement_map.png

# Track real-world objects with YOLO
python3 object_tracker.py scene_*.jpg --method yolo --target-objects car person --visualize tracking.png

# Export detailed tracking data
python3 object_tracker.py sequence/*.jpg --method color --output tracking_data.json --max-distance 150
```

### Advanced Usage

#### Movement Tracking Options
```bash
# Track with custom distance threshold
python3 object_tracker.py photos/*.jpg --method color --max-distance 200 --visualize map.png

# Real-world measurements with movement tracking
python3 object_tracker.py images/*.jpg --method yolo --pixels-per-unit 10.0 --output data.json

# Track specific object types only
python3 object_tracker.py sequence/*.jpg --method yolo --target-objects apple bottle --confidence 0.4

# Complex tracking scenario
python3 object_tracker.py complex_scene_*.jpg --method color --max-distance 150 --no-display
```

#### Single Image Detection Options
```bash
# YOLO detection with high confidence
python3 object_detector.py complex_scene.jpg --method yolo --confidence 0.7

# Save results and visualization
python3 object_detector.py image.jpg --method yolo --output results.json --visualize output.png

# Specify pixels per unit for real-world measurements
python3 object_detector.py image.jpg --method yolo --pixels-per-unit 10.0

# Color detection without noise reduction
python3 object_detector.py clean_image.jpg --method color --no-preprocessing

# Template matching
python3 object_detector.py image.jpg --method template --templates template1.jpg template2.jpg
```

#### Examples and Demos
```bash
# Run comprehensive tracking examples
python3 tracking_example.py

# Create test sequences for validation
python3 create_tracking_test.py --type both

# Run original detection examples
python3 real_world_example.py
```

### Movement Tracking Parameters

- `--max-distance`: Maximum pixels an object can move between frames (default: 100)
- `--pixels-per-unit`: Conversion factor for real-world measurements (default: 1.0)
- `--visualize`: Save movement map visualization to specified file
- `--output`: Export tracking data to JSON file
- `--no-display`: Run without showing visualizations

### Output Formats

#### Movement Tracking JSON Structure
```json
{
  "total_frames": 5,
  "tracking_summary": {
    "total_tracks": 3,
    "active_tracks": 2,
    "completed_tracks": 1
  },
  "tracked_objects": [
    {
      "track_id": 1,
      "object_type": "red_object",
      "duration_frames": 5,
      "total_distance_moved": 450.5,
      "average_speed": 112.6,
      "trajectory": [[100, 200], [150, 220], [200, 240]],
      "first_position": [100, 200],
      "last_position": [200, 240]
    }
  ],
  "movement_statistics": {
    "total_distance_all_objects": 1200.3,
    "max_distance_single_object": 450.5,
    "max_speed_observed": 125.4
  }
}
```

### Use Cases

#### Movement Tracking Applications
- **Security Monitoring**: Track people and vehicles in surveillance footage
- **Sports Analysis**: Track player movements and ball trajectories
- **Warehouse Management**: Monitor movement of packages and equipment
- **Scientific Research**: Track animal behavior or object movement in experiments
- **Quality Control**: Monitor product movement on assembly lines
- **Traffic Analysis**: Track vehicle flow and patterns

#### Object Detection Applications  
- **Inventory Management**: Count and locate items on shelves or tables
- **Quality Control**: Identify defective products on assembly lines
- **Food Service**: Track food items and containers in kitchens
- **Retail Analytics**: Monitor product placement and customer interactions
- **Research**: Analyze object arrangements and spatial relationships

### Technical Details

#### Tracking Algorithm
The movement tracking system uses:
1. **Object Detection**: Each frame processed with chosen detection method
2. **Position Matching**: Objects matched between frames using distance-based algorithms
3. **Trajectory Building**: Movement paths constructed from matched positions
4. **Lifecycle Management**: Handles objects appearing/disappearing from view
5. **Statistics Calculation**: Movement distances, speeds, and patterns analyzed

#### Coordinate System
- Origin at bottom-left corner of image
- X-axis points right, Y-axis points up
- Positions reported in pixel coordinates (convertible to real-world units)
- All distances calculated using Euclidean geometry
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