const excessivelyLargeObjectToLog = {
  user: {
    id: 12345,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1-555-555-5555",
    address: {
      street: "123 Main St",
      city: "Springfield",
      state: "IL",
      postalCode: "62704",
      country: "USA"
    },
    preferences: {
      notifications: {
        email: true,
        sms: false,
        push: true
      },
      theme: "dark",
      language: "en-US",
      timeZone: "America/Chicago"
    }
  },
  orders: [
    {
      id: 98765,
      date: "2024-08-15T14:30:00Z",
      status: "Shipped",
      items: [
        {
          productId: "A123",
          name: "Laptop",
          quantity: 1,
          price: 999.99,
          options: {
            color: "Silver",
            warranty: "2 years"
          }
        },
        {
          productId: "B456",
          name: "Wireless Mouse",
          quantity: 2,
          price: 19.99,
          options: {
            color: "Black"
          }
        }
      ],
      shipping: {
        method: "Standard",
        trackingNumber: "1Z999AA10123456784",
        carrier: "UPS",
        estimatedDelivery: "2024-08-20"
      },
      billing: {
        total: 1039.96,
        tax: 62.40,
        shipping: 0,
        discount: 10.00
      }
    },
    {
      id: 87654,
      date: "2024-08-01T10:15:00Z",
      status: "Delivered",
      items: [
        {
          productId: "C789",
          name: "Smartphone",
          quantity: 1,
          price: 799.99,
          options: {
            color: "Blue",
            storage: "128GB"
          }
        }
      ],
      shipping: {
        method: "Express",
        trackingNumber: "1Z999AA10123456785",
        carrier: "FedEx",
        estimatedDelivery: "2024-08-03"
      },
      billing: {
        total: 799.99,
        tax: 48.00,
        shipping: 15.00,
        discount: 0
      }
    }
  ],
  supportTickets: [
    {
      id: 54321,
      dateOpened: "2024-08-10T09:00:00Z",
      status: "Resolved",
      issue: "Battery not charging",
      resolution: "Replaced under warranty"
    },
    {
      id: 43210,
      dateOpened: "2024-07-25T13:45:00Z",
      status: "Pending",
      issue: "Order not received",
      resolution: null
    }
  ],
  settings: {
    privacy: {
      tracking: true,
      dataSharing: false
    },
    account: {
      twoFactorAuthentication: true,
      recoveryEmail: "backup.email@example.com"
    },
    display: {
      resolution: "1920x1080",
      brightness: 80,
      contrast: 70
    }
  },
  notifications: [
    {
      id: 101,
      type: "Order Update",
      message: "Your order #98765 has been shipped.",
      date: "2024-08-15T14:35:00Z",
      read: false
    },
    {
      id: 102,
      type: "Promotion",
      message: "Get 20% off on your next purchase!",
      date: "2024-08-10T10:00:00Z",
      read: true
    }
  ]
};

module.exports = excessivelyLargeObjectToLog