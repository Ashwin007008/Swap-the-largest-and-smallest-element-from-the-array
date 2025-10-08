/**
 * Swap the Largest and Smallest Element from the Array - Node.js Implementation
 * Author: Educational Purpose
 * Date: October 8, 2025
 */

const readline = require('readline');

/**
 * Find the indices of minimum and maximum elements in the array
 * @param {number[]} arr - The input array
 * @returns {Object} Object containing minIndex and maxIndex
 */
function findMinMaxIndices(arr) {
    if (arr.length === 0) {
        return { minIndex: -1, maxIndex: -1 };
    }
    
    let minIndex = 0;
    let maxIndex = 0;
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[minIndex]) {
            minIndex = i;
        }
        if (arr[i] > arr[maxIndex]) {
            maxIndex = i;
        }
    }
    
    return { minIndex, maxIndex };
}

/**
 * Swap the largest and smallest elements in the array
 * @param {number[]} arr - The input array
 * @returns {number[]} The modified array
 */
function swapLargestSmallest(arr) {
    if (arr.length < 2) {
        console.log("Array should have at least 2 elements");
        return arr;
    }
    
    const { minIndex, maxIndex } = findMinMaxIndices(arr);
    
    console.log("Before swapping:");
    console.log(`Array: [${arr.join(', ')}]`);
    console.log(`Smallest element: ${arr[minIndex]} at index ${minIndex}`);
    console.log(`Largest element: ${arr[maxIndex]} at index ${maxIndex}`);
    
    // Swap the elements
    [arr[minIndex], arr[maxIndex]] = [arr[maxIndex], arr[minIndex]];
    
    console.log("\nAfter swapping:");
    console.log(`Array: [${arr.join(', ')}]`);
    console.log(`Elements at index ${minIndex} and ${maxIndex} have been swapped!`);
    
    return arr;
}

/**
 * Get array input from user
 * @param {readline.Interface} rl - Readline interface
 * @returns {Promise<number[]>} Promise that resolves to array of numbers
 */
function getArrayInput(rl) {
    return new Promise((resolve) => {
        rl.question('Enter array elements separated by spaces: ', (input) => {
            try {
                const elements = input.trim().split(/\s+/);
                const arr = elements.map(x => {
                    const num = parseInt(x);
                    if (isNaN(num)) {
                        throw new Error(`Invalid number: ${x}`);
                    }
                    return num;
                });
                resolve(arr);
            } catch (error) {
                console.log("Please enter valid integers!");
                resolve(null);
            }
        });
    });
}

/**
 * Print separator line
 * @param {number} length - Length of the separator
 */
function printSeparator(length = 60) {
    console.log('='.repeat(length));
}

/**
 * Main function to demonstrate the swap functionality
 */
async function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    printSeparator();
    console.log("    SWAP LARGEST AND SMALLEST ELEMENT FROM ARRAY");
    printSeparator();
    
    // Example 1: Predefined array
    console.log("\nExample 1: Predefined Array");
    const exampleArr = [64, 34, 25, 12, 22, 11, 90];
    swapLargestSmallest([...exampleArr]); // Create a copy using spread operator
    
    // Example 2: User input
    printSeparator();
    console.log("\nExample 2: User Input");
    const userArr = await getArrayInput(rl);
    if (userArr && userArr.length > 0) {
        swapLargestSmallest(userArr);
    }
    
    // Example 3: Edge cases
    printSeparator();
    console.log("\nExample 3: Edge Cases");
    
    console.log("\nCase 1: Array with 2 elements");
    const smallArr = [5, 1];
    swapLargestSmallest([...smallArr]);
    
    console.log("\nCase 2: Array with identical elements");
    const identicalArr = [7, 7, 7, 7];
    swapLargestSmallest([...identicalArr]);
    
    console.log("\nCase 3: Single element array");
    const singleArr = [42];
    swapLargestSmallest([...singleArr]);
    
    // Additional Examples
    console.log("\nCase 4: Array with negative numbers");
    const negativeArr = [-5, 3, -10, 8, 0];
    swapLargestSmallest([...negativeArr]);
    
    console.log("\nCase 5: Array with floating point numbers (converted to integers)");
    const floatArr = [3.7, 1.2, 9.8, 2.1].map(Math.floor);
    swapLargestSmallest([...floatArr]);
    
    rl.close();
}

// Additional utility functions for educational purposes

/**
 * Alternative implementation using built-in Math.min and Math.max
 * @param {number[]} arr - The input array
 * @returns {number[]} The modified array
 */
function swapLargestSmallestAlternative(arr) {
    if (arr.length < 2) {
        console.log("Array should have at least 2 elements");
        return arr;
    }
    
    const minValue = Math.min(...arr);
    const maxValue = Math.max(...arr);
    const minIndex = arr.indexOf(minValue);
    const maxIndex = arr.indexOf(maxValue);
    
    console.log("Alternative implementation:");
    console.log(`Min value: ${minValue}, Max value: ${maxValue}`);
    
    // Swap
    [arr[minIndex], arr[maxIndex]] = [arr[maxIndex], arr[minIndex]];
    
    return arr;
}

/**
 * Performance comparison function
 * @param {number[]} arr - The input array
 */
function performanceComparison(arr) {
    console.log("\nPerformance Comparison:");
    
    // Method 1: Manual iteration
    console.time("Manual iteration");
    const { minIndex, maxIndex } = findMinMaxIndices([...arr]);
    console.timeEnd("Manual iteration");
    
    // Method 2: Using Math.min/max
    console.time("Math.min/max");
    const minValue = Math.min(...arr);
    const maxValue = Math.max(...arr);
    console.timeEnd("Math.min/max");
    
    console.log(`Manual method found indices: ${minIndex}, ${maxIndex}`);
    console.log(`Math method found values: ${minValue}, ${maxValue}`);
}

// Export functions for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        findMinMaxIndices,
        swapLargestSmallest,
        swapLargestSmallestAlternative,
        performanceComparison
    };
}

// Run main function if this file is executed directly
if (require.main === module) {
    main().catch(console.error);
}
