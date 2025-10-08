#include <iostream>
#include <vector>
#include <algorithm>
#include <string>

/**
 * Swap the Largest and Smallest Element from the Array - C++ Implementation
 * Author: Educational Purpose
 * Date: October 8, 2025
 */

using namespace std;

/**
 * Find the indices of minimum and maximum elements in the array
 * @param arr The input vector
 * @return pair containing (minIndex, maxIndex)
 */
pair<int, int> findMinMaxIndices(const vector<int>& arr) {
    if (arr.empty()) {
        return {-1, -1};
    }
    
    int minIndex = 0;
    int maxIndex = 0;
    
    for (int i = 1; i < arr.size(); i++) {
        if (arr[i] < arr[minIndex]) {
            minIndex = i;
        }
        if (arr[i] > arr[maxIndex]) {
            maxIndex = i;
        }
    }
    
    return {minIndex, maxIndex};
}

/**
 * Print array elements
 * @param arr The vector to print
 */
void printArray(const vector<int>& arr) {
    cout << "[";
    for (int i = 0; i < arr.size(); i++) {
        cout << arr[i];
        if (i < arr.size() - 1) cout << ", ";
    }
    cout << "]";
}

/**
 * Swap the largest and smallest elements in the array
 * @param arr The input vector (passed by reference)
 * @return The modified vector
 */
vector<int> swapLargestSmallest(vector<int>& arr) {
    if (arr.size() < 2) {
        cout << "Array should have at least 2 elements" << endl;
        return arr;
    }
    
    auto [minIndex, maxIndex] = findMinMaxIndices(arr);
    
    cout << "Before swapping:" << endl;
    cout << "Array: ";
    printArray(arr);
    cout << endl;
    cout << "Smallest element: " << arr[minIndex] << " at index " << minIndex << endl;
    cout << "Largest element: " << arr[maxIndex] << " at index " << maxIndex << endl;
    
    // Swap the elements
    swap(arr[minIndex], arr[maxIndex]);
    
    cout << "\nAfter swapping:" << endl;
    cout << "Array: ";
    printArray(arr);
    cout << endl;
    cout << "Elements at index " << minIndex << " and " << maxIndex << " have been swapped!" << endl;
    
    return arr;
}

/**
 * Get array input from user
 * @return Vector of integers
 */
vector<int> getArrayInput() {
    vector<int> arr;
    int n;
    
    try {
        cout << "Enter the number of elements: ";
        cin >> n;
        
        if (n <= 0) {
            cout << "Please enter a positive number!" << endl;
            return arr;
        }
        
        arr.resize(n);
        cout << "Enter " << n << " elements: ";
        
        for (int i = 0; i < n; i++) {
            cin >> arr[i];
        }
        
        return arr;
    } catch (const exception& e) {
        cout << "Please enter valid integers!" << endl;
        return vector<int>();
    }
}

/**
 * Print separator line
 * @param length Length of the separator
 */
void printSeparator(int length = 60) {
    cout << string(length, '=') << endl;
}

/**
 * Main function to demonstrate the swap functionality
 */
int main() {
    printSeparator();
    cout << "    SWAP LARGEST AND SMALLEST ELEMENT FROM ARRAY" << endl;
    printSeparator();
    
    // Example 1: Predefined array
    cout << "\nExample 1: Predefined Array" << endl;
    vector<int> exampleArr = {64, 34, 25, 12, 22, 11, 90};
    vector<int> tempArr = exampleArr; // Create a copy
    swapLargestSmallest(tempArr);
    
    // Example 2: User input
    printSeparator();
    cout << "\nExample 2: User Input" << endl;
    vector<int> userArr = getArrayInput();
    if (!userArr.empty()) {
        swapLargestSmallest(userArr);
    }
    
    // Example 3: Edge cases
    printSeparator();
    cout << "\nExample 3: Edge Cases" << endl;
    
    cout << "\nCase 1: Array with 2 elements" << endl;
    vector<int> smallArr = {5, 1};
    swapLargestSmallest(smallArr);
    
    cout << "\nCase 2: Array with identical elements" << endl;
    vector<int> identicalArr = {7, 7, 7, 7};
    swapLargestSmallest(identicalArr);
    
    cout << "\nCase 3: Single element array" << endl;
    vector<int> singleArr = {42};
    swapLargestSmallest(singleArr);
    
    return 0;
}
