/**
 * API utility functions for making requests to the backend
 */

/**
 * Submit contact form data to the backend
 * @param {Object} formData - The contact form data
 * @returns {Promise} - Response from the API
 */
export const submitContactForm = async (formData) => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://192.168.1.7:5000/api';
      const response = await fetch(`${apiUrl}/contacts/submitContact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          message: formData.message,
          accept_policy: formData.agreeToTerms,
        }),
      });
  
      if (!response.ok) {
        // Get error message from the response if possible
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || `Error: ${response.status}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  };