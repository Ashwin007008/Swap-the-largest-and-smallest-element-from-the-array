# Swap-the-largest-and-smallest-element-from-the-array

This program swaps the largest and smallest elements in an array.

## Problem Description

Given an array of integers, the program finds the largest and smallest elements and swaps their positions.

### Input
- The first line contains an integer `n`, the size of the array.
- The second line contains `n` space-separated integers, representing the elements of the array.

### Output
- Print the modified array after swapping the largest and smallest elements.

### Example

**Input:**
```
5
10 2 3 4 1
```

**Output:**
```
1 2 3 4 10
```

**Explanation:**
The largest element (10) at index 0 and smallest element (1) at index 4 are swapped in the array.

## Usage

Run the program using Python 3:

```bash
python3 swap_array.py
```

Then provide input as shown in the example above.

## Algorithm

1. Read the array size and elements from input
2. Go through the array and keep track of the indices of the largest and smallest elements
3. Compare each element with the current largest and smallest to update them as needed
4. Swap the elements at the identified positions
5. Print the modified array

## Testing

Run the unit tests to verify the implementation:

```bash
python3 -m unittest test_swap_array.py -v
```
