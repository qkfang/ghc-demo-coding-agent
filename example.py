#!/usr/bin/env python3
"""
Example usage of the object detector with different methods.
"""

import os
import sys
from object_detector import ObjectDetector

def example_color_detection():
    """Example of color-based object detection."""
    print("=== Color-based Detection Example ===")
    
    # Create test image if it doesn't exist
    if not os.path.exists("test_image.jpg"):
        os.system("python3 create_test_image.py")
    
    # Initialize detector
    detector = ObjectDetector()
    
    # Load image
    if not detector.load_image("test_image.jpg"):
        return False
    
    # Define color ranges for detection
    color_ranges = [
        {
            'name': 'red_object',
            'lower': [0, 50, 50],
            'upper': [10, 255, 255]
        },
        {
            'name': 'blue_object', 
            'lower': [100, 50, 50],
            'upper': [130, 255, 255]
        },
        {
            'name': 'green_object',
            'lower': [40, 50, 50],
            'upper': [80, 255, 255]
        }
    ]
    
    # Detect objects
    objects = detector.detect_objects_by_color(color_ranges)
    print(f"Detected {len(objects)} objects")
    
    # Get analysis
    analysis = detector.get_object_analysis(pixels_per_unit=5.0)  # 5 pixels = 1 unit
    
    if 'error' not in analysis:
        print("\nObjects:")
        for obj in analysis['objects']:
            print(f"  - {obj['name']}: {obj['position_2d']} facing {obj['facing_direction']}")
        
        print("\nDistances:")
        for dist in analysis['distances']:
            print(f"  - {dist['object1']} to {dist['object2']}: {dist['distance_units']:.1f} units")
    
    return True

def main():
    """Run the example."""
    try:
        success = example_color_detection()
        if success:
            print("\nExample completed successfully!")
            print("Check test_image.jpg for the input image")
            print("Run with visualization: python3 object_detector.py test_image.jpg")
        else:
            print("Example failed!")
            return 1
    except Exception as e:
        print(f"Error running example: {e}")
        return 1
    
    return 0

if __name__ == "__main__":
    exit(main())