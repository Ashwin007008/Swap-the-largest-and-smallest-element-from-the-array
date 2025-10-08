#!/usr/bin/env python3

def swap_largest_smallest(arr):
    """
    Swap the largest and smallest elements in the array.
    
    Args:
        arr: List of integers
    
    Returns:
        Modified list with largest and smallest elements swapped
    """
    if len(arr) <= 1:
        return arr
    
    # Find indices of largest and smallest elements
    min_idx = 0
    max_idx = 0
    
    for i in range(len(arr)):
        if arr[i] < arr[min_idx]:
            min_idx = i
        if arr[i] > arr[max_idx]:
            max_idx = i
    
    # Swap the elements
    arr[min_idx], arr[max_idx] = arr[max_idx], arr[min_idx]
    
    return arr


def main():
    # Read input
    n = int(input())
    arr = list(map(int, input().split()))
    
    # Swap largest and smallest elements
    result = swap_largest_smallest(arr)
    
    # Print output
    print(' '.join(map(str, result)))


if __name__ == "__main__":
    main()
