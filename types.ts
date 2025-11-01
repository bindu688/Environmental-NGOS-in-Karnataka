
// FIX: Import `React` to make React's types and JSX namespace available in this file.
import React from 'react';

export interface NGO {
  name: string;
  location: string;
  aspects: string[];
  iconKey: string;
}

export interface ChatMessage {
  id: number;
  author: 'user' | 'model';
  text: string;
}
