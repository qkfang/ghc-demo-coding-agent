#!/usr/bin/env python3
"""
Create Test Image Sequence for Object Tracking

This script creates a sequence of test images with moving colored objects
to demonstrate and test the object tracking functionality.
"""

import cv2
import numpy as np
import os
from pathlib import Path


def create_tracking_test_sequence(output_dir: str = "test_sequence", num_frames: int = 5):
    """
    Create a sequence of test images with moving objects.
    
    Args:
        output_dir (str): Directory to save test images
        num_frames (int): Number of frames to generate
    """
    # Create output directory
    Path(output_dir).mkdir(exist_ok=True)
    
    # Image dimensions
    width, height = 800, 600
    
    # Define moving objects with their paths
    objects = [
        {
            'name': 'red_circle',
            'color': (0, 0, 255),  # Red in BGR
            'size': 40,
            'start_pos': (100, 300),
            'end_pos': (700, 300)  # Move horizontally
        },
        {
            'name': 'blue_square', 
            'color': (255, 0, 0),  # Blue in BGR
            'size': 35,
            'start_pos': (400, 100),
            'end_pos': (400, 500)  # Move vertically
        },
        {
            'name': 'green_triangle',
            'color': (0, 255, 0),  # Green in BGR
            'size': 45,
            'start_pos': (150, 150),
            'end_pos': (650, 450)  # Move diagonally
        }
    ]
    
    print(f"Creating {num_frames} test images in '{output_dir}' directory...")
    
    for frame_idx in range(num_frames):
        # Create blank image
        img = np.ones((height, width, 3), dtype=np.uint8) * 240  # Light gray background
        
        # Add some background pattern to make it more realistic
        for i in range(0, width, 50):
            cv2.line(img, (i, 0), (i, height), (220, 220, 220), 1)
        for i in range(0, height, 50):
            cv2.line(img, (0, i), (width, i), (220, 220, 220), 1)
        
        # Calculate interpolation factor
        t = frame_idx / (num_frames - 1) if num_frames > 1 else 0
        
        # Draw each object at its interpolated position
        for obj in objects:
            # Interpolate position
            start_x, start_y = obj['start_pos']
            end_x, end_y = obj['end_pos']
            
            current_x = int(start_x + t * (end_x - start_x))
            current_y = int(start_y + t * (end_y - start_y))
            
            # Draw object based on its name
            if 'circle' in obj['name']:
                cv2.circle(img, (current_x, current_y), obj['size'], obj['color'], -1)
                cv2.circle(img, (current_x, current_y), obj['size'], (0, 0, 0), 2)  # Black outline
            elif 'square' in obj['name']:
                half_size = obj['size'] // 2
                pt1 = (current_x - half_size, current_y - half_size)
                pt2 = (current_x + half_size, current_y + half_size)
                cv2.rectangle(img, pt1, pt2, obj['color'], -1)
                cv2.rectangle(img, pt1, pt2, (0, 0, 0), 2)  # Black outline
            elif 'triangle' in obj['name']:
                # Create triangle points
                half_size = obj['size'] // 2
                points = np.array([
                    [current_x, current_y - half_size],
                    [current_x - half_size, current_y + half_size],
                    [current_x + half_size, current_y + half_size]
                ], np.int32)
                cv2.fillPoly(img, [points], obj['color'])
                cv2.polylines(img, [points], True, (0, 0, 0), 2)  # Black outline
        
        # Add frame number
        cv2.putText(img, f"Frame {frame_idx + 1}/{num_frames}", (10, 30), 
                   cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 0), 2)
        
        # Save image
        filename = f"frame_{frame_idx + 1:03d}.jpg"
        filepath = os.path.join(output_dir, filename)
        cv2.imwrite(filepath, img)
        print(f"  Created: {filepath}")
    
    print(f"\nTest sequence created successfully!")
    print(f"To test object tracking, run:")
    print(f"python3 object_tracker.py {output_dir}/frame_*.jpg --method color --visualize movement_map.png")


def create_realistic_test_sequence(output_dir: str = "realistic_sequence", num_frames: int = 6):
    """
    Create a more realistic test sequence with objects that might disappear and reappear.
    """
    # Create output directory
    Path(output_dir).mkdir(exist_ok=True)
    
    # Image dimensions
    width, height = 800, 600
    
    # Define objects with more complex behavior
    objects = [
        {
            'name': 'moving_red',
            'color': (0, 0, 255),
            'size': 35,
            'trajectory': [(150, 200), (250, 180), (350, 160), (450, 140), (550, 120), (650, 100)],
            'visible_frames': [0, 1, 2, 3, 4, 5]  # Visible in all frames
        },
        {
            'name': 'disappearing_blue',
            'color': (255, 0, 0),
            'size': 40,
            'trajectory': [(100, 400), (200, 350), (300, 300), None, None, (500, 200)],  # Disappears in middle
            'visible_frames': [0, 1, 2, 5]  # Disappears in frames 3-4, reappears in 5
        },
        {
            'name': 'stationary_green',
            'color': (0, 255, 0),
            'size': 30,
            'trajectory': [(400, 500)] * 6,  # Stays in same place
            'visible_frames': [0, 1, 2, 3, 4, 5]
        },
        {
            'name': 'late_arriving_yellow',
            'color': (0, 255, 255),
            'size': 38,
            'trajectory': [None, None, None, (200, 450), (300, 430), (400, 410)],  # Appears only in later frames
            'visible_frames': [3, 4, 5]
        }
    ]
    
    print(f"Creating {num_frames} realistic test images in '{output_dir}' directory...")
    
    for frame_idx in range(num_frames):
        # Create background with some texture
        img = np.random.randint(230, 250, (height, width, 3), dtype=np.uint8)
        
        # Add some background pattern
        for i in range(0, width, 80):
            cv2.line(img, (i, 0), (i, height), (200, 200, 200), 1)
        for i in range(0, height, 80):
            cv2.line(img, (0, i), (width, i), (200, 200, 200), 1)
        
        # Add some noise/texture
        noise = np.random.randint(-10, 10, (height, width, 3), dtype=np.int16)
        img = np.clip(img.astype(np.int16) + noise, 0, 255).astype(np.uint8)
        
        # Draw visible objects
        for obj in objects:
            if frame_idx in obj['visible_frames'] and obj['trajectory'][frame_idx] is not None:
                pos = obj['trajectory'][frame_idx]
                
                # Add slight random variation to make tracking more challenging
                jitter_x = np.random.randint(-2, 3)
                jitter_y = np.random.randint(-2, 3)
                actual_pos = (pos[0] + jitter_x, pos[1] + jitter_y)
                
                # Draw circle for all objects
                cv2.circle(img, actual_pos, obj['size'], obj['color'], -1)
                cv2.circle(img, actual_pos, obj['size'], (0, 0, 0), 2)
        
        # Add frame info
        cv2.putText(img, f"Frame {frame_idx + 1}/{num_frames}", (10, 30), 
                   cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 0), 2)
        
        # Save image
        filename = f"realistic_frame_{frame_idx + 1:03d}.jpg"
        filepath = os.path.join(output_dir, filename)
        cv2.imwrite(filepath, img)
        print(f"  Created: {filepath}")
    
    print(f"\nRealistic test sequence created!")
    print(f"This sequence includes:")
    print(f"  - Objects that move in complex patterns")
    print(f"  - Objects that disappear and reappear")
    print(f"  - Objects that appear only in later frames")
    print(f"  - Background noise and texture")
    print(f"\nTo test, run:")
    print(f"python3 object_tracker.py {output_dir}/realistic_frame_*.jpg --method color --visualize realistic_movement.png")


if __name__ == "__main__":
    import argparse
    
    parser = argparse.ArgumentParser(description="Create test image sequences for object tracking")
    parser.add_argument('--type', choices=['simple', 'realistic', 'both'], default='both',
                       help='Type of test sequence to create')
    parser.add_argument('--frames', type=int, default=5,
                       help='Number of frames for simple sequence')
    parser.add_argument('--realistic-frames', type=int, default=6,
                       help='Number of frames for realistic sequence')
    
    args = parser.parse_args()
    
    if args.type in ['simple', 'both']:
        create_tracking_test_sequence(num_frames=args.frames)
        print()
    
    if args.type in ['realistic', 'both']:
        create_realistic_test_sequence(num_frames=args.realistic_frames)