#!/usr/bin/env python3
"""
Swap the Largest and Smallest Element from the Array - Python Implementation
Author: Educational Purpose
Date: October 8, 2025
"""

def find_min_max_indices(arr):
    """
    Find the indices of minimum and maximum elements in the array
    Returns: tuple (min_index, max_index)
    """
    if not arr:
        return None, None
    
    min_index = 0
    max_index = 0
    
    for i in range(1, len(arr)):
        if arr[i] < arr[min_index]:
            min_index = i
        if arr[i] > arr[max_index]:
            max_index = i
    
    return min_index, max_index

def swap_largest_smallest(arr):
    """
    Swap the largest and smallest elements in the array
    """
    if len(arr) < 2:
        print("Array should have at least 2 elements")
        return arr
    
    min_index, max_index = find_min_max_indices(arr)
    
    print(f"Before swapping:")
    print(f"Array: {arr}")
    print(f"Smallest element: {arr[min_index]} at index {min_index}")
    print(f"Largest element: {arr[max_index]} at index {max_index}")
    
    # Swap the elements
    arr[min_index], arr[max_index] = arr[max_index], arr[min_index]
    
    print(f"\nAfter swapping:")
    print(f"Array: {arr}")
    print(f"Elements at index {min_index} and {max_index} have been swapped!")
    
    return arr

def get_array_input():
    """
    Get array input from user
    """
    try:
        print("Enter array elements separated by spaces:")
        elements = input().strip().split()
        arr = [int(x) for x in elements]
        return arr
    except ValueError:
        print("Please enter valid integers!")
        return None

def main():
    """
    Main function to demonstrate the swap functionality
    """
    print("=" * 60)
    print("    SWAP LARGEST AND SMALLEST ELEMENT FROM ARRAY")
    print("=" * 60)
    
    # Example 1: Predefined array
    print("\nExample 1: Predefined Array")
    example_arr = [64, 34, 25, 12, 22, 11, 90]
    result = swap_largest_smallest(example_arr.copy())
    
    # Example 2: User input
    print("\n" + "=" * 60)
    print("\nExample 2: User Input")
    user_arr = get_array_input()
    if user_arr:
        swap_largest_smallest(user_arr)
    
    # Example 3: Edge cases
    print("\n" + "=" * 60)
    print("\nExample 3: Edge Cases")
    
    print("\nCase 1: Array with 2 elements")
    small_arr = [5, 1]
    swap_largest_smallest(small_arr.copy())
    
    print("\nCase 2: Array with identical elements")
    identical_arr = [7, 7, 7, 7]
    swap_largest_smallest(identical_arr.copy())
    
    print("\nCase 3: Single element array")
    single_arr = [42]
    swap_largest_smallest(single_arr.copy())

if __name__ == "__main__":
    main()
