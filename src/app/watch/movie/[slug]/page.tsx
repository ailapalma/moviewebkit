'use client';

import React, { useState } from 'react';
import EmbedPlayer from '@/components/watch/embed-player';

export default function Page({ params }: { params: { slug: string } }) {
  const id = params.slug.split('-').pop();
  
  // Track which server is currently active
  const [server, setServer] = useState<'to' | 'pro'>('to');

  // Dynamically set the URL based on the active server button
  const currentUrl = server === 'to' 
    ? `https://vidsrc.to/embed/movie/${id}` 
    : `https://vidlink.pro/embed/movie/${id}`;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', gap: '16px' }}>
      {/* The Video Player Frame */}
      <EmbedPlayer url={currentUrl} />

      {/* Server Selection Buttons Layout */}
      <div style={{ 
        display: 'flex', 
        gap: '12px', 
        backgroundColor: '#171717', 
        padding: '8px 16px', 
        borderRadius: '8px', 
        border: '1px solid #262626',
        marginTop: '10px'
      }}>
        <button 
          onClick={() => setServer('to')}
          style={{
            padding: '8px 16px',
            borderRadius: '4px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            border: 'none',
            transition: '0.2s',
            backgroundColor: server === 'to' ? '#2563eb' : 'transparent',
            color: server === 'to' ? '#ffffff' : '#a3a3a3'
          }}
        >
          Server 1 (VidSrc)
        </button>
        <button 
          onClick={() => setServer('pro')}
          style={{
            padding: '8px 16px',
            borderRadius: '4px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            border: 'none',
            transition: '0.2s',
            backgroundColor: server === 'pro' ? '#2563eb' : 'transparent',
            color: server === 'pro' ? '#ffffff' : '#a3a3a3'
          }}
        >
          Server 2 (VidLink)
        </button>
      </div>
    </div>
  );
}
