#!/usr/bin/env python3
"""
Real-world Object Detection Examples

This script demonstrates how to use the object detection system for real-world scenarios
with complex backgrounds and actual objects like apples, bottles, cars, etc.
"""

import sys
import os
from object_detector import ObjectDetector

def demo_yolo_detection():
    """Demonstrate YOLO-based detection for real-world objects."""
    print("=== YOLO Object Detection Demo ===")
    print("This requires installing ultralytics: pip install ultralytics torch torchvision")
    
    detector = ObjectDetector()
    
    # Example usage for different scenarios
    examples = [
        {
            'description': 'Detect fruits on a kitchen counter',
            'command': 'python3 object_detector.py kitchen_photo.jpg --method yolo --target-objects apple banana orange',
            'explanation': 'This will detect only apples, bananas, and oranges in the image'
        },
        {
            'description': 'Detect vehicles in a parking lot',
            'command': 'python3 object_detector.py parking.jpg --method yolo --target-objects car truck motorcycle bicycle',
            'explanation': 'This will detect various types of vehicles'
        },
        {
            'description': 'Detect bottles and containers on a table',
            'command': 'python3 object_detector.py table_scene.jpg --method yolo --target-objects bottle cup bowl',
            'explanation': 'This will detect drinkware and containers'
        },
        {
            'description': 'Detect all objects with high confidence',
            'command': 'python3 object_detector.py complex_scene.jpg --method yolo --confidence 0.7',
            'explanation': 'This will detect all objects with at least 70% confidence'
        }
    ]
    
    print("\nExample commands for real-world scenarios:")
    for i, example in enumerate(examples, 1):
        print(f"\n{i}. {example['description']}:")
        print(f"   Command: {example['command']}")
        print(f"   {example['explanation']}")

def demo_improved_color_detection():
    """Demonstrate improved color detection for complex backgrounds."""
    print("\n=== Improved Color Detection Demo ===")
    print("The color detection has been enhanced to handle noisy backgrounds better.")
    
    examples = [
        {
            'description': 'Detect colored objects with noise reduction',
            'command': 'python3 object_detector.py noisy_image.jpg --method color',
            'explanation': 'Automatically applies preprocessing to reduce background noise'
        },
        {
            'description': 'Disable preprocessing for clean images',
            'command': 'python3 object_detector.py clean_image.jpg --method color --no-preprocessing',
            'explanation': 'Skip noise reduction for images with clean backgrounds'
        }
    ]
    
    print("\nExample commands:")
    for i, example in enumerate(examples, 1):
        print(f"\n{i}. {example['description']}:")
        print(f"   Command: {example['command']}")
        print(f"   {example['explanation']}")

def list_available_objects():
    """List objects that can be detected with YOLO."""
    print("\n=== Available Objects for YOLO Detection ===")
    
    detector = ObjectDetector()
    
    categories = {
        'Food Items': ['apple', 'banana', 'orange', 'carrot', 'hot_dog', 'pizza', 'donut', 'cake'],
        'Containers': ['bottle', 'wine_glass', 'cup', 'bowl'],
        'Vehicles': ['bicycle', 'car', 'motorcycle', 'airplane', 'bus', 'train', 'truck', 'boat'],
        'Electronics': ['cell_phone', 'microwave', 'oven', 'toaster'],
        'Animals': ['bird', 'cat', 'dog', 'horse', 'sheep', 'cow', 'elephant', 'bear', 'zebra', 'giraffe'],
        'Sports': ['sports_ball', 'frisbee', 'skis', 'snowboard', 'kite', 'baseball_bat', 'baseball_glove', 'skateboard', 'surfboard', 'tennis_racket'],
        'Household': ['book', 'clock', 'vase', 'scissors', 'teddy_bear', 'hair_drier', 'toothbrush'],
        'Personal Items': ['backpack', 'umbrella', 'handbag', 'tie', 'suitcase']
    }
    
    for category, items in categories.items():
        print(f"\n{category}:")
        for item in items:
            print(f"  - {item}")

def create_test_scenarios():
    """Create example test scenarios for different use cases."""
    print("\n=== Test Scenarios ===")
    
    scenarios = [
        {
            'title': 'Kitchen Counter Analysis',
            'description': 'Analyze objects on a kitchen counter with various fruits and utensils',
            'setup': 'Place apples, bananas, and a bottle on a counter. Take a photo.',
            'command': 'python3 object_detector.py kitchen.jpg --method yolo --target-objects apple banana bottle --output kitchen_analysis.json'
        },
        {
            'title': 'Desk Object Tracking',
            'description': 'Track objects on a desk including electronics and personal items',
            'setup': 'Arrange a cell phone, cup, and book on a desk. Take a photo.',
            'command': 'python3 object_detector.py desk.jpg --method yolo --target-objects cell_phone cup book --visualize desk_visualization.png'
        },
        {
            'title': 'Toy Detection',
            'description': 'Detect toy cars and teddy bears in a playroom',
            'setup': 'Place toy cars and teddy bears on the floor. Take a photo.',
            'command': 'python3 object_detector.py playroom.jpg --method yolo --target-objects car teddy_bear --confidence 0.3'
        }
    ]
    
    for i, scenario in enumerate(scenarios, 1):
        print(f"\n{i}. {scenario['title']}")
        print(f"   Description: {scenario['description']}")
        print(f"   Setup: {scenario['setup']}")
        print(f"   Command: {scenario['command']}")

def main():
    """Main demonstration function."""
    print("Real-world Object Detection Examples")
    print("=" * 50)
    
    demo_yolo_detection()
    demo_improved_color_detection()
    list_available_objects()
    create_test_scenarios()
    
    print("\n=== Getting Started ===")
    print("1. For YOLO detection, install dependencies:")
    print("   pip install ultralytics torch torchvision")
    print("\n2. Test with the sample image:")
    print("   python3 object_detector.py sample_image.jpg --method color")
    print("\n3. Try YOLO detection (if dependencies installed):")
    print("   python3 object_detector.py your_image.jpg --method yolo --target-objects apple bottle")
    print("\n4. For complex backgrounds, color detection now automatically applies noise reduction")
    print("5. Use --help to see all available options:")
    print("   python3 object_detector.py --help")

if __name__ == "__main__":
    main()