# API Contracts & Backend Integration Plan

## Overview
This document outlines the backend API endpoints needed and how frontend will integrate with them.

## Current Mock Data Status
- **mock.js Location**: `/app/frontend/src/data/mock.js`
- **Mocked Data**: Contact form submissions (frontend validation only, no actual backend call)
- **No Mocking Needed**: Personal info, skills, projects, blog posts (all static content)

## Backend Implementation Required

### 1. Contact Form Endpoint
**Purpose**: Store contact form submissions in MongoDB

**Endpoint**: `POST /api/contact`

**Request Body**:
```json
{
  "name": "string (min 2 chars)",
  "email": "string (valid email)",
  "message": "string (min 10 chars)"
}
```

**Response Success** (201):
```json
{
  "success": true,
  "message": "Message sent successfully",
  "id": "mongodb_document_id"
}
```

**Response Error** (400/500):
```json
{
  "success": false,
  "error": "Error message"
}
```

**MongoDB Schema**:
```python
{
  "id": "uuid",
  "name": "string",
  "email": "string",
  "message": "string",
  "timestamp": "datetime",
  "status": "unread/read"  # for future admin panel
}
```

### 2. Get Contact Messages (Optional - for future admin panel)
**Endpoint**: `GET /api/contact/messages`
**Purpose**: Retrieve all contact messages (protected route)

## Frontend Integration Changes

### Contact Component (`/app/frontend/src/components/Contact.js`)

**Current Implementation** (Line ~60-75):
```javascript
// Mock API call - simulating network delay
await new Promise((resolve) => setTimeout(resolve, 1500));
console.log('Form submitted:', formData);
```

**New Implementation**:
```javascript
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const response = await axios.post(`${BACKEND_URL}/api/contact`, formData);

if (response.data.success) {
  setSubmitStatus('success');
  setFormData({ name: '', email: '', message: '' });
} else {
  setSubmitStatus('error');
}
```

**Error Handling**:
- Network errors
- Validation errors from backend
- Timeout handling

## Implementation Steps

### Phase 1: Backend Setup
1. Create MongoDB model for contact messages
2. Create POST `/api/contact` endpoint
3. Add validation (name, email, message)
4. Add error handling
5. Test with curl/Postman

### Phase 2: Frontend Integration  
1. Remove mock API call in Contact.js
2. Add actual axios POST request
3. Handle loading states
4. Handle success/error responses
5. Test form submission

### Phase 3: Testing
1. Test validation (frontend + backend)
2. Test successful submission
3. Test error scenarios
4. Verify MongoDB storage
5. Test on both dev and production

## Environment Variables
- Frontend already has `REACT_APP_BACKEND_URL` configured
- Backend has `MONGO_URL` configured
- No new environment variables needed

## Notes
- All API routes MUST be prefixed with `/api` (Kubernetes ingress requirement)
- Contact form uses mock submission currently - needs backend integration
- All other data (projects, blog, skills) is static and doesn't need backend APIs
