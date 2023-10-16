const mongoose = require('mongoose');
const Supplier = require('../models/supplier');

describe('Supplier Model', () => {
  it('should create a new supplier with valid schema', () => {
    // Positive Test Case 1: Create a supplier with valid data
    const sampleSupplier = new Supplier({
      supplierID: 'S1',
      businessName: 'Supplier 1',
      fullName: 'John Doe',
      tele: 1234567890,
      email: 'supplier1@example.com',
      address: '123 Main St',
    });

    // Validate the Supplier instance against the schema
    const validationResult = sampleSupplier.validateSync();

    // Positive Assertion 1: Assert that the validation result is undefined (no validation errors)
    expect(validationResult).toBeUndefined();
    
    // Positive Test Case 2: Create another supplier with valid data
    const anotherSupplier = new Supplier({
      supplierID: 'S2',
      businessName: 'Supplier 2',
      fullName: 'Jane Smith',
      tele: 9876543210,
      email: 'supplier2@example.com',
      address: '456 Side St',
    });

    // Validate the second Supplier instance against the schema
    const anotherValidationResult = anotherSupplier.validateSync();

    // Positive Assertion 2: Assert that the validation result is undefined (no validation errors)
    expect(anotherValidationResult).toBeUndefined();

    // Negative Test Case: Attempt to create a supplier with an invalid tele (non-numeric)
    const supplierWithInvalidTele = new Supplier({
      supplierID: 'S3',
      businessName: 'Supplier 3',
      fullName: 'Bob Johnson',
      tele: 'invalid-contact',
      email: 'supplier3@example.com',
      address: '789 Back St',
    });

    // Validate the third Supplier instance against the schema
    const invalidTeleValidationResult = supplierWithInvalidTele.validateSync();

    // Negative Assertion: Assert that the validation result is not undefined (contains validation errors)
    expect(invalidTeleValidationResult).not.toBeUndefined();
  });
});

