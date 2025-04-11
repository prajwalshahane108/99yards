// utils/WaitlistAPI.js

/**
 * Function to join the waitlist
 * @param {Object} data - The form data
 * @param {string} data.name - User's name
 * @param {string} data.email - User's email
 * @param {string} data.phone - User's phone number
 * @param {Array} data.roles - User's selected roles
 * @param {string} data.otherRole - User's custom role (if applicable)
 * @param {Array} data.learningPreferences - User's learning preferences
 * @param {string} data.otherLearningPreference - User's custom learning preference (if applicable)
 * @returns {Promise} - Response from the API
 */
export const joinWaitlist = async (data) => {
  try {
    // Format the data according to API requirements
    const formattedData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      roles: formatRolesForAPI(data.roles, data.otherRole),
      learningTypes: formatLearningTypesForAPI(data.learningPreferences, data.otherLearningPreference)
    };

    // Make the API call
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://192.168.1.7:5000/api';
    const response = await fetch(`${apiUrl}/waitlist/join`, {
    // const response = await fetch('http://192.168.1.7:5000/api/waitlist/join', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formattedData),
    });

    // Parse and return the response
    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.message || 'Failed to join waitlist');
    }
    
    return result;
  } catch (error) {
    console.error('Error joining waitlist:', error);
    throw error;
  }
};

/**
 * Format roles array for API
 * @param {Array} roles - Array of role keys 
 * @param {string} otherRole - Custom role text
 * @returns {Array} - Formatted roles array for API
 */
const formatRolesForAPI = (roles, otherRole) => {
  // Map role keys to proper display names
  const roleMap = {
    'executive': 'Fashion Industry Executive',
    'professional-mid': 'Fashion Industry Professional (0-5 years experience)',
    'professional-senior': 'Fashion Industry Professional (5-10 years experience)',
    'entrepreneur': 'Aspiring Entrepreneur',
    'student': 'Student',
  };
  
  return roles.map(role => {
    if (role === 'other' && otherRole) {
      return { role_type: otherRole };
    }
    return { role_type: roleMap[role] || role };
  });
};

/**
 * Format learning preferences array for API
 * @param {Array} preferences - Array of learning preference keys
 * @param {string} otherPreference - Custom learning preference text
 * @returns {Array} - Formatted learning types array for API
 */
const formatLearningTypesForAPI = (preferences, otherPreference) => {
  // Map preference keys to proper display names
  const preferenceMap = {
    'business-essentials': 'Business essentials',
    'merchandising-strategies': 'Merchandising strategies',
    'product-development': 'Product development',
    'marketing-sales': 'Marketing & sales strategies',
    'sustainable-practices': 'Sustainable practices',
    'operations-logistics': 'Operations & logistics',
  };
  
  return preferences.map(pref => {
    if (pref === 'other' && otherPreference) {
      return { learning_type: otherPreference };
    }
    return { learning_type: preferenceMap[pref] || pref };
  });
};