#!/usr/bin/env python3
"""
Object Movement Tracking Examples

This script demonstrates various use cases for the object tracking functionality.
"""

import os
import subprocess
import sys
from pathlib import Path


def run_command(command, description):
    """Run a command and display its description."""
    print(f"\n{'='*60}")
    print(f"EXAMPLE: {description}")
    print(f"Command: {command}")
    print(f"{'='*60}")
    
    result = subprocess.run(command, shell=True, capture_output=True, text=True)
    
    if result.returncode == 0:
        print("SUCCESS")
        if result.stdout:
            # Show first few lines of output
            lines = result.stdout.split('\n')
            for line in lines[:10]:
                if line.strip():
                    print(f"  {line}")
            if len(lines) > 10:
                print(f"  ... ({len(lines) - 10} more lines)")
    else:
        print("ERROR:")
        print(result.stderr)


def main():
    """Run various tracking examples."""
    print("Object Movement Tracking Examples")
    print("=" * 50)
    
    # Check if test sequences exist
    if not Path("test_sequence").exists():
        print("Creating test sequences...")
        subprocess.run("python3 create_tracking_test.py --type both", shell=True)
    
    # Example 1: Basic color tracking with simple sequence
    run_command(
        "python3 object_tracker.py test_sequence/frame_*.jpg --method color --max-distance 250 --visualize example1_movement.png --output example1_results.json --no-display",
        "Basic color-based tracking with simple moving objects"
    )
    
    # Example 2: Complex tracking with realistic sequence
    run_command(
        "python3 object_tracker.py realistic_sequence/realistic_frame_*.jpg --method color --max-distance 150 --visualize example2_movement.png --output example2_results.json --no-display",
        "Complex tracking with objects that appear/disappear"
    )
    
    # Example 3: Using custom pixels per unit
    run_command(
        "python3 object_tracker.py test_sequence/frame_001.jpg test_sequence/frame_002.jpg test_sequence/frame_003.jpg --method color --max-distance 250 --pixels-per-unit 10.0 --visualize example3_movement.png --no-display",
        "Tracking with real-world distance units (10 pixels = 1 unit)"
    )
    
    # Example 4: YOLO detection (if available)
    print("\n" + "="*60)
    print("EXAMPLE: YOLO-based object tracking (if YOLO model available)")
    print("="*60)
    
    # Create a test image with YOLO-detectable objects
    if Path("sample_image.jpg").exists():
        run_command(
            "python3 object_tracker.py sample_image.jpg sample_image.jpg --method yolo --confidence 0.3 --max-distance 200 --visualize example4_movement.png --no-display",
            "YOLO detection on sample images"
        )
    else:
        print("sample_image.jpg not found - skipping YOLO example")
    
    # Display summary
    print("\n" + "="*60)
    print("EXAMPLE RESULTS SUMMARY")
    print("="*60)
    
    output_files = [
        "example1_movement.png", "example1_results.json",
        "example2_movement.png", "example2_results.json", 
        "example3_movement.png",
        "example4_movement.png"
    ]
    
    existing_files = [f for f in output_files if Path(f).exists()]
    
    print(f"Generated {len(existing_files)} output files:")
    for file in existing_files:
        size = Path(file).stat().st_size
        print(f"  - {file} ({size:,} bytes)")
    
    print("\nYou can view the movement visualizations by opening the PNG files.")
    print("JSON files contain detailed tracking data for further analysis.")
    
    print("\n" + "="*60)
    print("USAGE TIPS")
    print("="*60)
    print("1. Adjust --max-distance based on how far objects move between frames")
    print("2. Use --pixels-per-unit for real-world measurements")
    print("3. YOLO method works best for common objects (fruits, vehicles, etc.)")
    print("4. Color method works well with distinct colored objects")
    print("5. Template method is good for specific object shapes")
    
    return 0


if __name__ == "__main__":
    exit(main())