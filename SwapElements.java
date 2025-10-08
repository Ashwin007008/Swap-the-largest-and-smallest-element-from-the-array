import java.util.Arrays;
import java.util.Scanner;

/**
 * Swap the Largest and Smallest Element from the Array - Java Implementation
 * Author: Educational Purpose
 * Date: October 8, 2025
 */
public class SwapElements {
    
    /**
     * Find the indices of minimum and maximum elements in the array
     * @param arr The input array
     * @return int array containing [minIndex, maxIndex]
     */
    public static int[] findMinMaxIndices(int[] arr) {
        if (arr.length == 0) {
            return new int[]{-1, -1};
        }
        
        int minIndex = 0;
        int maxIndex = 0;
        
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] < arr[minIndex]) {
                minIndex = i;
            }
            if (arr[i] > arr[maxIndex]) {
                maxIndex = i;
            }
        }
        
        return new int[]{minIndex, maxIndex};
    }
    
    /**
     * Swap the largest and smallest elements in the array
     * @param arr The input array
     * @return The modified array
     */
    public static int[] swapLargestSmallest(int[] arr) {
        if (arr.length < 2) {
            System.out.println("Array should have at least 2 elements");
            return arr;
        }
        
        int[] indices = findMinMaxIndices(arr);
        int minIndex = indices[0];
        int maxIndex = indices[1];
        
        System.out.println("Before swapping:");
        System.out.println("Array: " + Arrays.toString(arr));
        System.out.println("Smallest element: " + arr[minIndex] + " at index " + minIndex);
        System.out.println("Largest element: " + arr[maxIndex] + " at index " + maxIndex);
        
        // Swap the elements
        int temp = arr[minIndex];
        arr[minIndex] = arr[maxIndex];
        arr[maxIndex] = temp;
        
        System.out.println("\nAfter swapping:");
        System.out.println("Array: " + Arrays.toString(arr));
        System.out.println("Elements at index " + minIndex + " and " + maxIndex + " have been swapped!");
        
        return arr;
    }
    
    /**
     * Get array input from user
     * @param scanner Scanner object for input
     * @return Array of integers
     */
    public static int[] getArrayInput(Scanner scanner) {
        try {
            System.out.println("Enter the number of elements:");
            int n = scanner.nextInt();
            
            if (n <= 0) {
                System.out.println("Please enter a positive number!");
                return null;
            }
            
            int[] arr = new int[n];
            System.out.println("Enter " + n + " elements:");
            
            for (int i = 0; i < n; i++) {
                arr[i] = scanner.nextInt();
            }
            
            return arr;
        } catch (Exception e) {
            System.out.println("Please enter valid integers!");
            return null;
        }
    }
    
    /**
     * Main method to demonstrate the swap functionality
     */
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("=" .repeat(60));
        System.out.println("    SWAP LARGEST AND SMALLEST ELEMENT FROM ARRAY");
        System.out.println("=" .repeat(60));
        
        // Example 1: Predefined array
        System.out.println("\nExample 1: Predefined Array");
        int[] exampleArr = {64, 34, 25, 12, 22, 11, 90};
        swapLargestSmallest(Arrays.copyOf(exampleArr, exampleArr.length));
        
        // Example 2: User input
        System.out.println("\n" + "=" .repeat(60));
        System.out.println("\nExample 2: User Input");
        int[] userArr = getArrayInput(scanner);
        if (userArr != null) {
            swapLargestSmallest(userArr);
        }
        
        // Example 3: Edge cases
        System.out.println("\n" + "=" .repeat(60));
        System.out.println("\nExample 3: Edge Cases");
        
        System.out.println("\nCase 1: Array with 2 elements");
        int[] smallArr = {5, 1};
        swapLargestSmallest(Arrays.copyOf(smallArr, smallArr.length));
        
        System.out.println("\nCase 2: Array with identical elements");
        int[] identicalArr = {7, 7, 7, 7};
        swapLargestSmallest(Arrays.copyOf(identicalArr, identicalArr.length));
        
        System.out.println("\nCase 3: Single element array");
        int[] singleArr = {42};
        swapLargestSmallest(Arrays.copyOf(singleArr, singleArr.length));
        
        scanner.close();
    }
}
