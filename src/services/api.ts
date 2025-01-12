import { PageConfig } from '../types';

const API_URL = 'https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config';

export async function fetchPageConfig(): Promise<PageConfig[]> {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching page config:', error);
    throw error;
  }
}