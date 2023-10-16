const Supplier = require('../models/supplier');
const {
  add,
  getAllSuppliers,
  deleteSupplier,
  update,
  getSupplier,
} = require('../controllers/supplier_controller');

// Mock dependencies and setup before each test
jest.mock('../models/supplier');

describe('Supplier Controller Tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('add', () => {
    it('should add a new supplier', async () => {
      // Arrange
      const req = {
        body: {
          supplierID: 'S1',
          businessName: 'Supplier 1',
          fullName: 'John Doe',
          tele: '1234567890',
          email: 'supplier1@example.com',
          address: '123 Main St',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      Supplier.prototype.save.mockResolvedValue(req.body);

      // Act
      await add(req, res);

      // Assert
      expect(Supplier.prototype.save).toHaveBeenCalledWith();
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: 'Supplier Added', Result: req.body });
    });
  });

  describe('getAllSuppliers', () => {
    it('should get all suppliers', async () => {
      // Arrange
      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const mockSuppliers = [
        {
          supplierID: 'S1',
          businessName: 'Supplier 1',
          fullName: 'John Doe',
          tele: '1234567890',
          email: 'supplier1@example.com',
          address: '123 Main St',
        },
      ];

      Supplier.find.mockResolvedValue(mockSuppliers);

      // Act
      await getAllSuppliers(req, res);

      // Assert
      expect(Supplier.find).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: 'Suppliers fetched', Result: mockSuppliers });
    });
  });

  describe('deleteSupplier', () => {
    it('should delete a specific supplier by ID', async () => {
      // Arrange
      const req = { params: { id: 'supplierID' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      Supplier.deleteOne.mockResolvedValue({});

      // Act
      await deleteSupplier(req, res);

      // Assert
      expect(Supplier.deleteOne).toHaveBeenCalledWith({ _id: 'supplierID' });
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: 'Supplier deleted successfully' });
    });
  });

  describe('update', () => {
    it('should update an existing supplier', async () => {
      // Arrange
      const req = {
        params: { id: 'supplierID' },
        body: {
          supplierID: 'S1',
          businessName: 'Updated Supplier 1',
          fullName: 'Updated John Doe',
          tele: '9876543210',
          email: 'updatedsupplier1@example.com',
          address: '456 New St',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      Supplier.findByIdAndUpdate.mockResolvedValue({});

      // Act
      await update(req, res);

      // Assert
      expect(Supplier.findByIdAndUpdate).toHaveBeenCalledWith('supplierID', req.body);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: 'Supplier Updated Successfully' });
    });
  });

  describe('getSupplier', () => {
    it('should get a specific supplier by ID', async () => {
      // Arrange
      const req = { params: { id: 'supplierID' } };
      const res = {
        send: jest.fn(),
      };

      const mockSupplier = {
        supplierID: 'S1',
        businessName: 'Supplier 1',
        fullName: 'John Doe',
        tele: '1234567890',
        email: 'supplier1@example.com',
        address: '123 Main St',
      };

      Supplier.findOne.mockResolvedValue(mockSupplier);

      // Act
      await getSupplier(req, res);

      // Assert
      expect(Supplier.findOne).toHaveBeenCalledWith({ _id: 'supplierID' });
      expect(res.send).toHaveBeenCalledWith({ status: 'Ok', supplier: mockSupplier });
    });
  });
});
