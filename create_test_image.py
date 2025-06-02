#!/usr/bin/env python3
"""
Create a test image with colored objects for testing the object detector.
"""

import cv2
import numpy as np
import os

def create_test_image(width=800, height=600, output_path="test_image.jpg"):
    """Create a test image with colored objects."""
    # Create a white background
    image = np.ones((height, width, 3), dtype=np.uint8) * 255
    
    # Add some colored rectangles as objects
    # Red rectangle (top-left)
    cv2.rectangle(image, (100, 100), (200, 200), (0, 0, 255), -1)
    
    # Blue circle (top-right)
    cv2.circle(image, (600, 150), 50, (255, 0, 0), -1)
    
    # Green rectangle (bottom-center)
    cv2.rectangle(image, (350, 400), (450, 500), (0, 255, 0), -1)
    
    # Save the image
    cv2.imwrite(output_path, image)
    print(f"Test image created: {output_path}")
    return output_path

if __name__ == "__main__":
    test_image_path = create_test_image()
    print(f"Test image saved to: {test_image_path}")