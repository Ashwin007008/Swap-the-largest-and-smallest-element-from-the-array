#!/usr/bin/env python3
"""
Test cases for swap_array.py
"""

import unittest
from swap_array import swap_largest_smallest


class TestSwapLargestSmallest(unittest.TestCase):
    
    def test_example_case(self):
        """Test the provided example"""
        arr = [10, 2, 3, 4, 1]
        result = swap_largest_smallest(arr)
        self.assertEqual(result, [1, 2, 3, 4, 10])
    
    def test_single_element(self):
        """Test with single element array"""
        arr = [5]
        result = swap_largest_smallest(arr)
        self.assertEqual(result, [5])
    
    def test_two_elements(self):
        """Test with two elements"""
        arr = [5, 3]
        result = swap_largest_smallest(arr)
        self.assertEqual(result, [3, 5])
    
    def test_all_same_elements(self):
        """Test with all same elements"""
        arr = [7, 7, 7, 7]
        result = swap_largest_smallest(arr)
        self.assertEqual(result, [7, 7, 7, 7])
    
    def test_negative_numbers(self):
        """Test with negative numbers"""
        arr = [-1, 5, -3, 2, 8]
        result = swap_largest_smallest(arr)
        self.assertEqual(result, [-1, 5, 8, 2, -3])
    
    def test_already_sorted(self):
        """Test with already sorted array"""
        arr = [1, 2, 3, 4, 5]
        result = swap_largest_smallest(arr)
        self.assertEqual(result, [5, 2, 3, 4, 1])
    
    def test_reverse_sorted(self):
        """Test with reverse sorted array"""
        arr = [5, 4, 3, 2, 1]
        result = swap_largest_smallest(arr)
        self.assertEqual(result, [1, 4, 3, 2, 5])


if __name__ == "__main__":
    unittest.main()
