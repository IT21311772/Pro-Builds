const mongoose = require('mongoose');
const Item = require('../models/item');

describe('Item Model', () => {
  it('should create a new item with valid schema', () => {
    // Positive Test Case 1: Create an item with valid data
    const sampleItem = new Item({
      name: 'Sample Item 01',
      unitPrice: 10.99,
      unitType: 'Type 01',
    });
    
    const validationResult = sampleItem.validateSync();

    // Positive Assertion 1: Assert that the validation result is undefined (no validation errors)
    expect(validationResult).toBeUndefined();
    
    // Positive Test Case 2: Create another item with valid data
    const anotherItem = new Item({
      name: 'Sample Item 02',
      unitPrice: 15.99,
      unitType: 'Type 02',
    });

    const anotherValidationResult = anotherItem.validateSync();

    // Positive Assertion 2: Assert that the validation result is undefined (no validation errors)
    expect(anotherValidationResult).toBeUndefined();
    
    // Negative Test Case 1: Attempt to create an item with missing name
    const itemWithMissingName = new Item({
      unitPrice: 20.99,
      unitType: 'Type 03',
    });
    
    const missingNameValidationResult = itemWithMissingName.validateSync();

    // Negative Assertion 1: Assert that the validation result is not undefined (contains validation errors)
    expect(missingNameValidationResult).not.toBeUndefined();

    // Negative Test Case: Attempt to create an item with missing name
    const itemWithMissingPrice = new Item({
      name: 'Sample Item 03',
      unitType: 'Type 03',
    });
    
    const missingPriceValidationResult = itemWithMissingPrice.validateSync();

    // Negative Assertion: Assert that the validation result is not undefined (contains validation errors)
    expect(missingPriceValidationResult).not.toBeUndefined();
  });
});

