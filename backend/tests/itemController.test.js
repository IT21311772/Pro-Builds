const Item = require('../models/item');
const {
  add,
  deleteAllItems,
  deleteItem,
  getAllItems,
} = require('../controllers/item_controller');

// Mock dependencies and setup before each test
jest.mock('../models/item');

describe('Item Controller Tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('add', () => {
    it('should add a new item', async () => {
      // Arrange
      const req = {
        body: { name: 'New Item', unitPrice: 10, unitType: 'pcs' },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      Item.prototype.save.mockResolvedValue(req.body);

      // Act
      await add(req, res);

      // Assert
      expect(Item.prototype.save).toHaveBeenCalledWith();
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(req.body);
    });

    it('should handle item already exists', async () => {
      // Arrange
      const req = {
        body: { name: 'Existing Item', unitPrice: 20, unitType: 'pack' },
      };
      const res = {
        send: jest.fn(),
      };

      Item.findOne.mockResolvedValue({}); // Simulate an existing item

      // Act
      await add(req, res);

      // Assert
      expect(Item.findOne).toHaveBeenCalledWith({ name: 'Existing Item' });
      expect(res.send).toHaveBeenCalledWith({ error: 'Item Already Exists' });
    });
  });
  describe('deleteAllItems', () => {
    it('should delete all items', async () => {
      // Arrange
      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      Item.deleteMany.mockResolvedValue({});

      // Act
      await deleteAllItems(req, res);

      // Assert
      expect(Item.deleteMany).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: 'All Items Deleted' });
    });
  });

  describe('deleteItem', () => {
    it('should delete a specific item by ID', async () => {
      // Arrange
      const req = { params: { id: 'itemID' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      Item.deleteOne.mockResolvedValue({});

      // Act
      await deleteItem(req, res);

      // Assert
      expect(Item.deleteOne).toHaveBeenCalledWith({ _id: 'itemID' });
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: 'Item deleted successfully' });
    });
  });

  describe('getAllItems', () => {
    it('should get all items', async () => {
      // Arrange
      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const mockItems = [
        { name: 'Item 1', unitPrice: 10, unitType: 'pcs' },
        { name: 'Item 2', unitPrice: 20, unitType: 'pack' },
      ];

      Item.find.mockResolvedValue(mockItems);

      // Act
      await getAllItems(req, res);

      // Assert
      expect(Item.find).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ Result: mockItems });
    });
  });
});

