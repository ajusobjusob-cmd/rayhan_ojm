# Rayhan Jusob - OJM Youth Leader Website

A modern, bilingual website for Rayhan Jusob, Youth Leader Secretary of the OJM (Organização da Juventude Moçambicana) for the UAE.

## Project Overview

This is a dynamic personal leadership website featuring:
- **Bilingual Support**: Complete English/Portuguese language switching
- **Content Management**: Admin panel for editing all content without code
- **Modern Design**: OJM color scheme with vibrant, responsive design
- **Photo Integration**: Images sourced from Rayhan's LinkedIn profile
- **Interactive Features**: Gallery lightbox, contact forms, smooth animations

## Key Features

### Language System
- Real-time language switching between English and Portuguese
- All content, navigation, forms, and messages are fully translated
- Language preference is saved locally
- SEO-optimized meta tags update with language changes

### Content Management
- **Admin Panel**: Hidden admin interface (gear icon in bottom-right)
- **Gallery Management**: Add/remove photos with titles and descriptions
- **News Management**: Create bilingual news articles and announcements
- **Content Export/Import**: JSON backup system for data safety
- **Local Storage**: All content changes are saved automatically

### Design & User Experience
- **OJM Branding**: Uses official Mozambique flag colors (red, green, yellow, black)
- **Responsive Design**: Mobile-first approach with smooth animations
- **Modern UI**: Gradient backgrounds, rounded cards, hover effects
- **Professional Layout**: Clean typography with Inter font family
- **Accessibility**: Keyboard navigation, screen reader support

### Sections
1. **Hero**: Professional photo with mission statement
2. **About**: Biography, timeline, and achievement statistics
3. **Activities**: Youth programs and community initiatives
4. **Gallery**: Interactive photo gallery with lightbox
5. **News**: Blog-style updates and announcements
6. **Contact**: Contact form with social media links

## Technical Architecture

### File Structure
- `index.html`: Main entry point with semantic HTML structure
- `style.css`: Modern CSS with CSS custom properties and responsive design
- `script.js`: Vanilla JavaScript with modular functionality

### Core Technologies
- **Vanilla HTML/CSS/JavaScript**: No framework dependencies
- **CSS Grid & Flexbox**: Modern layout techniques
- **CSS Custom Properties**: Consistent design system
- **Local Storage API**: Data persistence
- **Intersection Observer**: Scroll animations
- **Event Delegation**: Efficient event handling

### Admin Features
Access the admin panel by clicking the gear icon (bottom-right corner):
- **Content Editing**: Update text content in JSON format
- **Gallery Management**: Add new photos with metadata
- **News Management**: Create bilingual articles
- **Data Export**: Download complete website backup as JSON
- **Data Import**: Restore from backup files

### Performance Optimizations
- **Lazy Loading**: Images load only when visible
- **Debounced Events**: Optimized scroll and resize handlers
- **Local Storage**: Reduces server requests for dynamic content
- **Modern CSS**: Hardware-accelerated animations
- **Semantic HTML**: SEO and accessibility optimized

## Content Guidelines

### Adding New Content
1. Use the admin panel for most content updates
2. Gallery images should be web-optimized (max 800px width)
3. News articles support bilingual titles and excerpts
4. All text content should be provided in both languages

### Image Requirements
- **Profile Images**: Professional headshots work best
- **Gallery Images**: Event photos, community activities
- **News Images**: 400x200px recommended for consistency
- **Format**: JPEG or PNG, optimized for web

### Language Management
- All user-facing text uses `data-en` and `data-pt` attributes
- Dynamic content (news, gallery) includes language objects
- Form placeholders and validation messages are translated
- Meta tags and page titles update with language changes

## Development Notes

### Color Scheme (OJM/Mozambique Flag)
- **Primary Red**: #DC143C (OJM red)
- **Primary Green**: #228B22 (OJM green)
- **Accent Yellow**: #FFD700 (OJM yellow)
- **Text Black**: #1a1a1a (OJM black)
- **Clean White**: #ffffff

### Animation System
- Scroll-triggered animations using Intersection Observer
- Smooth transitions with CSS custom properties
- Hover effects on interactive elements
- Mobile-optimized touch interactions

### Responsive Breakpoints
- **Mobile**: < 480px (single column, stacked navigation)
- **Tablet**: 481px - 768px (adjusted grid layouts)
- **Desktop**: > 768px (full multi-column layouts)

### Browser Support
- Modern browsers with ES6+ support
- CSS Grid and Flexbox compatibility
- Local Storage API support
- Intersection Observer API support

## Future Enhancements

### Potential Upgrades with Backend
Consider enabling **Youware Backend** for:
- **User Authentication**: Allow community members to create accounts
- **Dynamic Content**: Server-side content management with database
- **Event Registration**: Online signup for OJM activities
- **Newsletter System**: Email subscription management
- **File Uploads**: Direct image and document uploads
- **Real-time Updates**: Live content updates without page refresh

### AI Integration Opportunities
With **AI SDK**, you could add:
- **Automatic Translation**: AI-powered content translation
- **Content Generation**: AI-assisted news article writing
- **Image Analysis**: Automatic photo tagging and descriptions
- **Chatbot Support**: Virtual assistant for website visitors

## Maintenance

### Regular Tasks
- Update content through admin panel
- Add new event photos to gallery
- Create news updates for recent activities
- Export data backups monthly
- Monitor contact form submissions

### Content Updates
- Photos: Replace with higher quality images as available
- News: Add monthly updates about OJM activities
- About Section: Update statistics and timeline as achievements grow
- Contact Info: Keep social media links current

This website serves as a professional platform for Rayhan Jusob's leadership role while providing a foundation for future community engagement and organizational growth.