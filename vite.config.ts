import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Custom plugin to handle figma:asset virtual imports
function figmaAssetPlugin() {
  const virtualModulePrefix = 'figma:asset/'
  
  // Map all figma:asset hashes to actual image URLs
  const assetMap: Record<string, string> = {
    // AboutPage.tsx
    '7f7e2102f963148b116c6f5561563ca02611b3a7.png': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    
    // BrandLogos.tsx - Client logos and hero images
    'f64e5c98c9ccddcfcc3f5c683ac75b63836131b8.png': 'https://images.unsplash.com/photo-1661347998423-b15d37d6f61e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    '6fdc72501fd939864200f2990cce2d089ceb5628.png': 'https://images.unsplash.com/photo-1661347998423-b15d37d6f61e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    'cfd9119e3aad236893ad8e58cf716d1cfbfb3d75.png': 'https://images.unsplash.com/photo-1661347998423-b15d37d6f61e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    'b91702f400a41d9d7021c9a174f67a24c79f0be1.png': 'https://images.unsplash.com/photo-1661347998423-b15d37d6f61e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    '55544b625c96df3d99666ac4487901393fe65cc9.png': 'https://images.unsplash.com/photo-1661347998423-b15d37d6f61e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    '663d77d5f03bc2e7fa5710a47a8c7ef4368566d8.png': 'https://images.unsplash.com/photo-1661347998423-b15d37d6f61e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    '282af3afa17f8bbe5a913d5ad8871049d9a1be34.png': 'https://images.unsplash.com/photo-1661347998423-b15d37d6f61e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    '66dd380ea1c0b86326250361a0d7447e0832c302.png': 'https://images.unsplash.com/photo-1661347998423-b15d37d6f61e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    
    // HomePage.tsx - Hero and testimonial avatars
    'af7fa589b5a042a3cc468d2b6f2d36efcdac78cd.png': 'https://images.unsplash.com/photo-1632910121591-29e2484c0259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    'ab2383425def2f19100606a4bdddb972cb9d070f.png': 'https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    '003c57366845b26630d9949f2b4a1ba8a55eb5cc.png': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    '59f008987f9297520dbc01f00c39b8d3cefdd05f.png': 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    'a9540f98905da8e58a31a5f8ecfed882149dac56.png': 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    'a40c2cae1c83068cd46e19eeadf570cd0a0fc794.png': 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    
    // IndustriesPage.tsx - Industry hero images
    '73e3c245e0b07afd9a3344837647ffa74beed88c.png': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    'f04184aaeb1543c205d7664196cbd97c1e473b0b.png': 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    '9953c668ebf4cb74c98575d03c977cfc69974498.png': 'https://images.unsplash.com/photo-1762330917056-e69b34329ddf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    '4704389719e2fd5e09161cd14543715f19918051.png': 'https://images.unsplash.com/photo-1710492341412-8b3aee7e70a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    '6515ebfdfd1f300e6e35a7422139614c08f011af.png': 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    '6b8273e5e14f194dd5dfa0c1ebf52e6ce2ad7cff.png': 'https://images.unsplash.com/photo-1767788543704-d68ce083048e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  }
  
  return {
    name: 'figma-asset-resolver',
    resolveId(id: string) {
      if (id.startsWith(virtualModulePrefix)) {
        return '\0' + id
      }
    },
    load(id: string) {
      if (id.startsWith('\0' + virtualModulePrefix)) {
        const hash = id.replace('\0' + virtualModulePrefix, '')
        const imageUrl = assetMap[hash] || 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='
        return `export default "${imageUrl}"`
      }
    }
  }
}

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    figmaAssetPlugin(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
})