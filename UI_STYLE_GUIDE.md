# OSS Project Analyzer - UI Style Guide

## Overview
This style guide defines the visual language and component system for the OSS Project Analyzer platform. The design balances clean professionalism with approachability, using a matte blue and orange color palette that conveys trustworthiness and energy.

---

## Table of Contents
1. [Brand Identity](#brand-identity)
2. [Color Palette](#color-palette)
3. [Typography](#typography)
4. [Spacing System](#spacing-system)
5. [Components](#components)
6. [Layout Patterns](#layout-patterns)
7. [Accessibility Guidelines](#accessibility-guidelines)
8. [Usage Examples](#usage-examples)

---

## Brand Identity

### Design Principles
- **Clean & Slick**: Minimal visual noise, purposeful whitespace
- **Approachable**: Not overly corporate, but professional enough for developers
- **Data-Forward**: Analytics and insights take center stage
- **Modern**: Contemporary web aesthetics without being trendy

### Voice & Tone
- Informative but not dry
- Encouraging but not patronizing
- Technical but accessible

---

## Color Palette

### Primary Colors

#### Blue Palette (Primary)
```css
--blue-950: #0a1929;  /* Darkest - headers, important text */
--blue-900: #0d2847;  /* Dark backgrounds, cards */
--blue-800: #143a66;  /* Hover states, borders */
--blue-700: #1a4d85;  /* Active states */
--blue-600: #2563a4;  /* Primary buttons, links */
--blue-500: #3178c3;  /* Default primary color */
--blue-400: #4d90db;  /* Hover on primary */
--blue-300: #70a8e8;  /* Lighter accents */
--blue-200: #a3c7f2;  /* Subtle backgrounds */
--blue-100: #d6e7fa;  /* Very light backgrounds */
--blue-50:  #edf5fd;  /* Page backgrounds */
```

#### Orange Palette (Accent)
```css
--orange-900: #7a2e0e;  /* Dark orange text */
--orange-800: #9c3d12;  /* Hover states */
--orange-700: #c44d16;  /* Active states */
--orange-600: #e05d1a;  /* Primary orange accent */
--orange-500: #f57435;  /* Default accent color */
--orange-400: #f88c5b;  /* Lighter accent */
--orange-300: #faa77f;  /* Subtle highlights */
--orange-200: #fcc6a8;  /* Very light accents */
--orange-100: #ffe4d3;  /* Background tints */
--orange-50:  #fff5ef;  /* Lightest backgrounds */
```

### Neutral Colors
```css
--gray-950: #0a0f14;  /* Almost black */
--gray-900: #0f1419;  /* Dark text */
--gray-800: #1a1f26;  /* Muted dark backgrounds */
--gray-700: #2d3642;  /* Secondary text */
--gray-600: #4a5568;  /* Placeholder text */
--gray-500: #6b7280;  /* Borders, dividers */
--gray-400: #9ca3af;  /* Disabled text */
--gray-300: #cbd5e0;  /* Light borders */
--gray-200: #e2e8f0;  /* Subtle backgrounds */
--gray-100: #f1f5f9;  /* Card backgrounds */
--gray-50:  #f8fafc;  /* Page backgrounds */

--white: #ffffff;
--black: #000000;
```

### Semantic Colors
```css
--success-dark:  #065f46;
--success:       #10b981;
--success-light: #d1fae5;

--warning-dark:  #92400e;
--warning:       #f59e0b;
--warning-light: #fef3c7;

--error-dark:    #991b1b;
--error:         #ef4444;
--error-light:   #fee2e2;

--info-dark:     #1e3a8a;
--info:          #3b82f6;
--info-light:    #dbeafe;
```

### Color Usage Guidelines

**Primary Blue**: Use for main navigation, primary actions, links, and key interactive elements.

**Accent Orange**: Use sparingly for CTAs, important highlights, new features, and notifications. Maximum 10-15% of interface.

**Neutral Grays**: Text hierarchy, backgrounds, borders, and structural elements.

**Semantic Colors**: Feedback messages, status indicators, and alerts.

---

## Typography

### Font Families

#### Primary Font: Inter
Clean, modern sans-serif with excellent readability at all sizes.

```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

**Usage**: Body text, UI elements, buttons, forms

**CDN Import**:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

#### Secondary Font: JetBrains Mono
Monospace font for code, technical data, and analytics.

```css
--font-mono: 'JetBrains Mono', 'Courier New', monospace;
```

**Usage**: Code snippets, commit hashes, numeric data, analytics

**CDN Import**:
```html
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
```

### Type Scale

```css
--text-xs:   0.75rem;   /* 12px */
--text-sm:   0.875rem;  /* 14px */
--text-base: 1rem;      /* 16px */
--text-lg:   1.125rem;  /* 18px */
--text-xl:   1.25rem;   /* 20px */
--text-2xl:  1.5rem;    /* 24px */
--text-3xl:  1.875rem;  /* 30px */
--text-4xl:  2.25rem;   /* 36px */
--text-5xl:  3rem;      /* 48px */
--text-6xl:  3.75rem;   /* 60px */
```

### Font Weights

```css
--font-light:     300;
--font-regular:   400;
--font-medium:    500;
--font-semibold:  600;
--font-bold:      700;
```

### Line Heights

```css
--leading-tight:   1.25;  /* Headings */
--leading-normal:  1.5;   /* Body text */
--leading-relaxed: 1.75;  /* Long form content */
```

### Typography Styles

#### Headings
```css
h1 {
  font-size: var(--text-4xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  color: var(--blue-950);
  margin-bottom: 1.5rem;
}

h2 {
  font-size: var(--text-3xl);
  font-weight: var(--font-semibold);
  line-height: var(--leading-tight);
  color: var(--blue-900);
  margin-bottom: 1.25rem;
}

h3 {
  font-size: var(--text-2xl);
  font-weight: var(--font-semibold);
  line-height: var(--leading-tight);
  color: var(--blue-800);
  margin-bottom: 1rem;
}

h4 {
  font-size: var(--text-xl);
  font-weight: var(--font-medium);
  line-height: var(--leading-tight);
  color: var(--blue-700);
  margin-bottom: 0.75rem;
}
```

#### Body Text
```css
.body-large {
  font-size: var(--text-lg);
  font-weight: var(--font-regular);
  line-height: var(--leading-normal);
  color: var(--gray-700);
}

.body {
  font-size: var(--text-base);
  font-weight: var(--font-regular);
  line-height: var(--leading-normal);
  color: var(--gray-700);
}

.body-small {
  font-size: var(--text-sm);
  font-weight: var(--font-regular);
  line-height: var(--leading-normal);
  color: var(--gray-600);
}

.caption {
  font-size: var(--text-xs);
  font-weight: var(--font-regular);
  line-height: var(--leading-normal);
  color: var(--gray-500);
}
```

---

## Spacing System

### Base Unit: 4px
All spacing values are multiples of 4px for visual consistency.

```css
--space-0:  0;
--space-1:  0.25rem;  /* 4px */
--space-2:  0.5rem;   /* 8px */
--space-3:  0.75rem;  /* 12px */
--space-4:  1rem;     /* 16px */
--space-5:  1.25rem;  /* 20px */
--space-6:  1.5rem;   /* 24px */
--space-8:  2rem;     /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

### Common Spacing Patterns

- **Component Padding**: `--space-4` to `--space-6`
- **Card Padding**: `--space-6` to `--space-8`
- **Section Spacing**: `--space-12` to `--space-16`
- **Page Margins**: `--space-16` to `--space-24`
- **Element Gap**: `--space-2` to `--space-4`

---

## Components

### Buttons

#### Primary Button
Main call-to-action buttons for important actions.

```css
.btn-primary {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  padding: 0.625rem 1.5rem; /* 10px 24px */
  background-color: var(--blue-600);
  color: var(--white);
  border: none;
  border-radius: 0.5rem; /* 8px */
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background-color: var(--blue-700);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(37, 99, 164, 0.2);
}

.btn-primary:active {
  background-color: var(--blue-800);
  transform: translateY(0);
}

.btn-primary:disabled {
  background-color: var(--gray-400);
  cursor: not-allowed;
  transform: none;
}
```

#### Secondary Button
Less emphasis, supporting actions.

```css
.btn-secondary {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  padding: 0.625rem 1.5rem;
  background-color: transparent;
  color: var(--blue-600);
  border: 2px solid var(--blue-600);
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background-color: var(--blue-50);
  border-color: var(--blue-700);
  color: var(--blue-700);
}

.btn-secondary:active {
  background-color: var(--blue-100);
}
```

#### Accent Button
High-visibility CTAs using orange accent.

```css
.btn-accent {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  padding: 0.625rem 1.5rem;
  background-color: var(--orange-600);
  color: var(--white);
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-accent:hover {
  background-color: var(--orange-700);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(224, 93, 26, 0.25);
}
```

#### Ghost Button
Minimal styling for tertiary actions.

```css
.btn-ghost {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  padding: 0.625rem 1.5rem;
  background-color: transparent;
  color: var(--gray-700);
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-ghost:hover {
  background-color: var(--gray-100);
  color: var(--gray-900);
}
```

#### Button Sizes

```css
.btn-sm {
  font-size: var(--text-sm);
  padding: 0.5rem 1rem; /* 8px 16px */
}

.btn-md {
  font-size: var(--text-base);
  padding: 0.625rem 1.5rem; /* 10px 24px */
}

.btn-lg {
  font-size: var(--text-lg);
  padding: 0.75rem 2rem; /* 12px 32px */
}
```

---

### Form Inputs

#### Text Input
```css
.input {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  padding: 0.75rem 1rem; /* 12px 16px */
  background-color: var(--white);
  color: var(--gray-900);
  border: 2px solid var(--gray-300);
  border-radius: 0.5rem;
  width: 100%;
  transition: all 0.2s ease;
}

.input:focus {
  outline: none;
  border-color: var(--blue-600);
  box-shadow: 0 0 0 3px rgba(37, 99, 164, 0.1);
}

.input:disabled {
  background-color: var(--gray-100);
  color: var(--gray-500);
  cursor: not-allowed;
}

.input::placeholder {
  color: var(--gray-400);
}

.input.error {
  border-color: var(--error);
}

.input.error:focus {
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}
```

#### Input with Label
```html
<div class="input-group">
  <label class="input-label" for="username">Username</label>
  <input type="text" id="username" class="input" placeholder="Enter your username">
  <span class="input-helper">This will be your public display name</span>
</div>
```

```css
.input-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  margin-bottom: var(--space-4);
}

.input-label {
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--gray-700);
}

.input-helper {
  font-size: var(--text-xs);
  color: var(--gray-500);
}

.input-error {
  font-size: var(--text-xs);
  color: var(--error);
}
```

#### Search Input
```css
.search-input {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  padding: 0.75rem 1rem 0.75rem 3rem; /* Extra left padding for icon */
  background-color: var(--gray-50);
  color: var(--gray-900);
  border: 2px solid var(--gray-300);
  border-radius: 0.75rem; /* More rounded for search */
  width: 100%;
  transition: all 0.2s ease;
}

.search-input:focus {
  outline: none;
  border-color: var(--blue-600);
  background-color: var(--white);
  box-shadow: 0 0 0 3px rgba(37, 99, 164, 0.1);
}
```

#### Select Dropdown
```css
.select {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  padding: 0.75rem 2.5rem 0.75rem 1rem; /* Extra right padding for arrow */
  background-color: var(--white);
  color: var(--gray-900);
  border: 2px solid var(--gray-300);
  border-radius: 0.5rem;
  width: 100%;
  cursor: pointer;
  transition: all 0.2s ease;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%234a5568' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
}

.select:focus {
  outline: none;
  border-color: var(--blue-600);
  box-shadow: 0 0 0 3px rgba(37, 99, 164, 0.1);
}
```

#### Checkbox
```css
.checkbox-wrapper {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  cursor: pointer;
}

.checkbox {
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid var(--gray-300);
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.2s ease;
  appearance: none;
  background-color: var(--white);
}

.checkbox:checked {
  background-color: var(--blue-600);
  border-color: var(--blue-600);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='white' d='M10 3L4.5 8.5L2 6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
}

.checkbox:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(37, 99, 164, 0.1);
}

.checkbox-label {
  font-size: var(--text-sm);
  color: var(--gray-700);
  user-select: none;
}
```

#### Radio Button
```css
.radio-wrapper {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  cursor: pointer;
}

.radio {
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid var(--gray-300);
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease;
  appearance: none;
  background-color: var(--white);
}

.radio:checked {
  border-color: var(--blue-600);
  background-color: var(--white);
  box-shadow: inset 0 0 0 4px var(--blue-600);
}

.radio:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(37, 99, 164, 0.1);
}

.radio-label {
  font-size: var(--text-sm);
  color: var(--gray-700);
  user-select: none;
}
```

#### Textarea
```css
.textarea {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  padding: 0.75rem 1rem;
  background-color: var(--white);
  color: var(--gray-900);
  border: 2px solid var(--gray-300);
  border-radius: 0.5rem;
  width: 100%;
  min-height: 120px;
  resize: vertical;
  transition: all 0.2s ease;
}

.textarea:focus {
  outline: none;
  border-color: var(--blue-600);
  box-shadow: 0 0 0 3px rgba(37, 99, 164, 0.1);
}
```

---

### Cards

#### Basic Card
```css
.card {
  background-color: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: 0.75rem; /* 12px */
  padding: var(--space-6);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
}

.card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-color: var(--gray-300);
}
```

#### Project Card
For displaying OSS projects in the explore page.

```css
.project-card {
  background-color: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: 0.75rem;
  padding: var(--space-6);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
  cursor: pointer;
}

.project-card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border-color: var(--blue-300);
  transform: translateY(-2px);
}

.project-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--space-4);
}

.project-card-title {
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
  color: var(--blue-900);
  margin-bottom: var(--space-1);
}

.project-card-description {
  font-size: var(--text-sm);
  color: var(--gray-600);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-4);
}

.project-card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-4);
}

.project-card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--space-4);
  border-top: 1px solid var(--gray-200);
}
```

#### Analytics Card
For displaying project analytics and insights.

```css
.analytics-card {
  background: linear-gradient(135deg, var(--blue-50) 0%, var(--white) 100%);
  border: 1px solid var(--blue-200);
  border-radius: 0.75rem;
  padding: var(--space-6);
  box-shadow: 0 2px 8px rgba(37, 99, 164, 0.08);
}

.analytics-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-4);
}

.analytics-card-title {
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  color: var(--blue-900);
}

.analytics-card-value {
  font-family: var(--font-mono);
  font-size: var(--text-3xl);
  font-weight: var(--font-bold);
  color: var(--blue-700);
}

.analytics-card-label {
  font-size: var(--text-sm);
  color: var(--gray-600);
  margin-top: var(--space-2);
}
```

---

### Badges & Tags

#### Badge
Small status indicators and labels.

```css
.badge {
  display: inline-flex;
  align-items: center;
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
  padding: 0.25rem 0.625rem; /* 4px 10px */
  border-radius: 0.375rem; /* 6px */
  line-height: 1;
}

.badge-primary {
  background-color: var(--blue-100);
  color: var(--blue-800);
}

.badge-accent {
  background-color: var(--orange-100);
  color: var(--orange-800);
}

.badge-success {
  background-color: var(--success-light);
  color: var(--success-dark);
}

.badge-neutral {
  background-color: var(--gray-200);
  color: var(--gray-700);
}
```

#### Tag
For categorization and filtering.

```css
.tag {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  font-size: var(--text-sm);
  font-weight: var(--font-regular);
  padding: 0.375rem 0.75rem; /* 6px 12px */
  background-color: var(--gray-100);
  color: var(--gray-700);
  border: 1px solid var(--gray-300);
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.tag:hover {
  background-color: var(--blue-50);
  border-color: var(--blue-300);
  color: var(--blue-700);
}

.tag.active {
  background-color: var(--blue-600);
  border-color: var(--blue-600);
  color: var(--white);
}
```

---

### Navigation

#### Top Navigation Bar
```css
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-4) var(--space-8);
  background-color: var(--white);
  border-bottom: 1px solid var(--gray-200);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  font-size: var(--text-xl);
  font-weight: var(--font-bold);
  color: var(--blue-700);
  text-decoration: none;
}

.navbar-nav {
  display: flex;
  align-items: center;
  gap: var(--space-6);
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar-link {
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  color: var(--gray-700);
  text-decoration: none;
  padding: var(--space-2) var(--space-3);
  border-radius: 0.375rem;
  transition: all 0.2s ease;
}

.navbar-link:hover {
  color: var(--blue-600);
  background-color: var(--blue-50);
}

.navbar-link.active {
  color: var(--blue-700);
  background-color: var(--blue-100);
}
```

#### Sidebar Navigation
```css
.sidebar {
  width: 280px;
  min-height: 100vh;
  background-color: var(--gray-50);
  border-right: 1px solid var(--gray-200);
  padding: var(--space-6);
}

.sidebar-section {
  margin-bottom: var(--space-8);
}

.sidebar-title {
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  color: var(--gray-500);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--space-3);
}

.sidebar-nav {
  list-style: none;
  margin: 0;
  padding: 0;
}

.sidebar-link {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--gray-700);
  text-decoration: none;
  padding: var(--space-3);
  border-radius: 0.5rem;
  transition: all 0.2s ease;
  margin-bottom: var(--space-1);
}

.sidebar-link:hover {
  background-color: var(--gray-100);
  color: var(--blue-600);
}

.sidebar-link.active {
  background-color: var(--blue-100);
  color: var(--blue-700);
}
```

---

### Profile & Avatar

#### Avatar
```css
.avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  background-color: var(--blue-500);
  color: var(--white);
  font-weight: var(--font-semibold);
  position: relative;
}

.avatar-sm {
  width: 2rem;
  height: 2rem;
  font-size: var(--text-xs);
}

.avatar-md {
  width: 2.5rem;
  height: 2.5rem;
  font-size: var(--text-sm);
}

.avatar-lg {
  width: 3rem;
  height: 3rem;
  font-size: var(--text-base);
}

.avatar-xl {
  width: 4rem;
  height: 4rem;
  font-size: var(--text-lg);
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-group {
  display: flex;
  align-items: center;
}

.avatar-group .avatar {
  margin-left: -0.5rem;
  border: 2px solid var(--white);
}

.avatar-group .avatar:first-child {
  margin-left: 0;
}
```

#### Profile Card
```css
.profile-card {
  background-color: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: 0.75rem;
  padding: var(--space-6);
  text-align: center;
}

.profile-card-avatar {
  margin: 0 auto var(--space-4);
}

.profile-card-name {
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
  color: var(--gray-900);
  margin-bottom: var(--space-1);
}

.profile-card-username {
  font-size: var(--text-sm);
  color: var(--gray-500);
  margin-bottom: var(--space-4);
}

.profile-card-bio {
  font-size: var(--text-sm);
  color: var(--gray-600);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-4);
}

.profile-card-stats {
  display: flex;
  justify-content: space-around;
  padding-top: var(--space-4);
  border-top: 1px solid var(--gray-200);
}

.profile-stat {
  text-align: center;
}

.profile-stat-value {
  font-family: var(--font-mono);
  font-size: var(--text-2xl);
  font-weight: var(--font-bold);
  color: var(--blue-700);
}

.profile-stat-label {
  font-size: var(--text-xs);
  color: var(--gray-500);
  margin-top: var(--space-1);
}
```

---

### Modals & Dialogs

#### Modal Overlay
```css
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(10, 15, 20, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: var(--space-4);
}

.modal {
  background-color: var(--white);
  border-radius: 0.75rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.modal-header {
  padding: var(--space-6);
  border-bottom: 1px solid var(--gray-200);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal-title {
  font-size: var(--text-2xl);
  font-weight: var(--font-semibold);
  color: var(--blue-900);
}

.modal-close {
  padding: var(--space-2);
  background: none;
  border: none;
  cursor: pointer;
  color: var(--gray-500);
  border-radius: 0.375rem;
  transition: all 0.2s ease;
}

.modal-close:hover {
  background-color: var(--gray-100);
  color: var(--gray-700);
}

.modal-body {
  padding: var(--space-6);
  overflow-y: auto;
  flex: 1;
}

.modal-footer {
  padding: var(--space-6);
  border-top: 1px solid var(--gray-200);
  display: flex;
  justify-content: flex-end;
  gap: var(--space-3);
}
```

---

### Alerts & Notifications

#### Alert
```css
.alert {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-4);
  border-radius: 0.5rem;
  font-size: var(--text-sm);
  margin-bottom: var(--space-4);
}

.alert-info {
  background-color: var(--info-light);
  color: var(--info-dark);
  border-left: 4px solid var(--info);
}

.alert-success {
  background-color: var(--success-light);
  color: var(--success-dark);
  border-left: 4px solid var(--success);
}

.alert-warning {
  background-color: var(--warning-light);
  color: var(--warning-dark);
  border-left: 4px solid var(--warning);
}

.alert-error {
  background-color: var(--error-light);
  color: var(--error-dark);
  border-left: 4px solid var(--error);
}

.alert-title {
  font-weight: var(--font-semibold);
  margin-bottom: var(--space-1);
}
```

#### Toast Notification
```css
.toast {
  position: fixed;
  bottom: var(--space-8);
  right: var(--space-8);
  background-color: var(--gray-900);
  color: var(--white);
  padding: var(--space-4) var(--space-6);
  border-radius: 0.5rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  gap: var(--space-3);
  max-width: 400px;
  z-index: 2000;
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.toast-success {
  background-color: var(--success-dark);
}

.toast-error {
  background-color: var(--error);
}

.toast-warning {
  background-color: var(--warning-dark);
}
```

---

### Loading States

#### Spinner
```css
.spinner {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  border: 3px solid var(--gray-200);
  border-top-color: var(--blue-600);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.spinner-sm {
  width: 1rem;
  height: 1rem;
  border-width: 2px;
}

.spinner-lg {
  width: 3rem;
  height: 3rem;
  border-width: 4px;
}
```

#### Skeleton Loader
```css
.skeleton {
  background: linear-gradient(
    90deg,
    var(--gray-200) 0%,
    var(--gray-100) 50%,
    var(--gray-200) 100%
  );
  background-size: 200% 100%;
  animation: loading 1.5s ease-in-out infinite;
  border-radius: 0.375rem;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

.skeleton-text {
  height: 1rem;
  margin-bottom: var(--space-2);
}

.skeleton-title {
  height: 1.5rem;
  width: 60%;
  margin-bottom: var(--space-3);
}

.skeleton-avatar {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
}

.skeleton-card {
  height: 200px;
  border-radius: 0.75rem;
}
```

---

### Data Display

#### Table
```css
.table-container {
  overflow-x: auto;
  border-radius: 0.75rem;
  border: 1px solid var(--gray-200);
  background-color: var(--white);
}

.table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--text-sm);
}

.table thead {
  background-color: var(--gray-50);
  border-bottom: 1px solid var(--gray-200);
}

.table th {
  padding: var(--space-4);
  text-align: left;
  font-weight: var(--font-semibold);
  color: var(--gray-700);
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.table td {
  padding: var(--space-4);
  color: var(--gray-700);
  border-top: 1px solid var(--gray-200);
}

.table tbody tr:hover {
  background-color: var(--blue-50);
}

.table tbody tr:last-child td {
  border-bottom: none;
}
```

#### Stats Display
```css
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-4);
}

.stat-card {
  background-color: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: 0.75rem;
  padding: var(--space-5);
}

.stat-label {
  font-size: var(--text-sm);
  color: var(--gray-600);
  margin-bottom: var(--space-2);
}

.stat-value {
  font-family: var(--font-mono);
  font-size: var(--text-3xl);
  font-weight: var(--font-bold);
  color: var(--blue-700);
  margin-bottom: var(--space-1);
}

.stat-change {
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
  display: flex;
  align-items: center;
  gap: var(--space-1);
}

.stat-change.positive {
  color: var(--success-dark);
}

.stat-change.negative {
  color: var(--error);
}
```

#### Progress Bar
```css
.progress {
  width: 100%;
  height: 0.5rem;
  background-color: var(--gray-200);
  border-radius: 9999px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background-color: var(--blue-600);
  border-radius: 9999px;
  transition: width 0.3s ease;
}

.progress-bar.accent {
  background-color: var(--orange-600);
}

.progress-with-label {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-2);
}

.progress-label {
  font-size: var(--text-sm);
  color: var(--gray-700);
  flex: 1;
}

.progress-percentage {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  color: var(--blue-700);
}
```

---

### Filters & Search

#### Filter Panel
```css
.filter-panel {
  background-color: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: 0.75rem;
  padding: var(--space-6);
}

.filter-section {
  margin-bottom: var(--space-6);
  padding-bottom: var(--space-6);
  border-bottom: 1px solid var(--gray-200);
}

.filter-section:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.filter-title {
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  color: var(--gray-900);
  margin-bottom: var(--space-3);
}

.filter-options {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.filter-actions {
  display: flex;
  gap: var(--space-2);
  margin-top: var(--space-4);
}
```

#### Search Bar with Filters
```css
.search-bar {
  display: flex;
  gap: var(--space-3);
  margin-bottom: var(--space-6);
}

.search-bar .search-input {
  flex: 1;
}

.filter-button {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: 0.75rem 1rem;
  background-color: var(--white);
  color: var(--gray-700);
  border: 2px solid var(--gray-300);
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: var(--text-base);
  font-weight: var(--font-medium);
}

.filter-button:hover {
  border-color: var(--blue-600);
  color: var(--blue-600);
}

.filter-button.active {
  background-color: var(--blue-600);
  color: var(--white);
  border-color: var(--blue-600);
}
```

---

### Tabs

```css
.tabs {
  border-bottom: 2px solid var(--gray-200);
  margin-bottom: var(--space-6);
}

.tabs-nav {
  display: flex;
  gap: var(--space-6);
  list-style: none;
  margin: 0;
  padding: 0;
}

.tab {
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  color: var(--gray-600);
  padding: var(--space-3) var(--space-1);
  border-bottom: 3px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  display: inline-block;
}

.tab:hover {
  color: var(--blue-600);
}

.tab.active {
  color: var(--blue-700);
  border-bottom-color: var(--blue-600);
}
```

---

### Tooltips

```css
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip-text {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--gray-900);
  color: var(--white);
  font-size: var(--text-xs);
  padding: var(--space-2) var(--space-3);
  border-radius: 0.375rem;
  white-space: nowrap;
  z-index: 1000;
  transition: opacity 0.2s ease;
}

.tooltip-text::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 5px solid transparent;
  border-top-color: var(--gray-900);
}

.tooltip:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}
```

---

### Dropdowns

```css
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-trigger {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: 0.625rem 1rem;
  background-color: var(--white);
  color: var(--gray-700);
  border: 2px solid var(--gray-300);
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.dropdown-trigger:hover {
  border-color: var(--blue-600);
  color: var(--blue-600);
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  background-color: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: 0.5rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  min-width: 200px;
  padding: var(--space-2);
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.2s ease;
}

.dropdown.open .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3);
  color: var(--gray-700);
  font-size: var(--text-sm);
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
}

.dropdown-item:hover {
  background-color: var(--blue-50);
  color: var(--blue-700);
}

.dropdown-divider {
  height: 1px;
  background-color: var(--gray-200);
  margin: var(--space-2) 0;
}
```

---

## Layout Patterns

### Container
```css
.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-6);
}

.container-sm {
  max-width: 640px;
}

.container-md {
  max-width: 768px;
}

.container-lg {
  max-width: 1024px;
}

.container-xl {
  max-width: 1280px;
}

.container-full {
  max-width: 100%;
}
```

### Grid System
```css
.grid {
  display: grid;
  gap: var(--space-6);
}

.grid-cols-1 { grid-template-columns: repeat(1, 1fr); }
.grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
.grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
.grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
.grid-cols-6 { grid-template-columns: repeat(6, 1fr); }
.grid-cols-12 { grid-template-columns: repeat(12, 1fr); }

/* Responsive */
@media (max-width: 768px) {
  .grid-cols-2,
  .grid-cols-3,
  .grid-cols-4 {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .grid-cols-3,
  .grid-cols-4 {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

### Flex Utilities
```css
.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.flex-wrap {
  flex-wrap: wrap;
}

.items-center {
  align-items: center;
}

.items-start {
  align-items: flex-start;
}

.items-end {
  align-items: flex-end;
}

.justify-center {
  justify-content: center;
}

.justify-between {
  justify-content: space-between;
}

.justify-end {
  justify-content: flex-end;
}

.gap-2 { gap: var(--space-2); }
.gap-3 { gap: var(--space-3); }
.gap-4 { gap: var(--space-4); }
.gap-6 { gap: var(--space-6); }
.gap-8 { gap: var(--space-8); }
```

### Page Layouts

#### Main Content + Sidebar
```css
.layout-with-sidebar {
  display: grid;
  grid-template-columns: 280px 1fr;
  min-height: 100vh;
}

@media (max-width: 1024px) {
  .layout-with-sidebar {
    grid-template-columns: 1fr;
  }
  
  .sidebar {
    display: none;
  }
}
```

#### Explore Page Layout
```css
.explore-layout {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: var(--space-8);
  max-width: 1440px;
  margin: 0 auto;
  padding: var(--space-8);
}

.explore-filters {
  /* Filter panel on the left */
}

.explore-content {
  /* Project cards grid on the right */
}

@media (max-width: 1024px) {
  .explore-layout {
    grid-template-columns: 1fr;
  }
}
```

---

## Accessibility Guidelines

### Color Contrast
- All text must meet WCAG AA standards (4.5:1 for normal text, 3:1 for large text)
- Interactive elements must have 3:1 contrast ratio with their background
- Use semantic colors to convey meaning, but never rely on color alone

### Focus States
All interactive elements must have clear focus indicators:

```css
:focus-visible {
  outline: 3px solid var(--blue-600);
  outline-offset: 2px;
}

button:focus-visible,
a:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible {
  outline: 3px solid var(--blue-600);
  outline-offset: 2px;
}
```

### Semantic HTML
- Use proper heading hierarchy (h1 → h2 → h3)
- Use semantic elements (`<nav>`, `<main>`, `<article>`, `<section>`)
- Add ARIA labels where necessary
- Ensure all images have alt text
- Make sure forms have proper labels

### Keyboard Navigation
- All interactive elements must be keyboard accessible
- Tab order should be logical
- Provide keyboard shortcuts for common actions
- Ensure modals trap focus appropriately

### Screen Reader Support
```html
<!-- Example: Button with screen reader text -->
<button aria-label="Search projects">
  <svg>...</svg>
  <span class="sr-only">Search</span>
</button>

<!-- Screen reader only utility class -->
<style>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
</style>
```

---

## Usage Examples

### Example 1: Experience Level Selector

```html
<div class="input-group">
  <label class="input-label">Experience Level</label>
  <div class="flex gap-3">
    <label class="radio-wrapper">
      <input type="radio" name="experience" value="beginner" class="radio">
      <span class="radio-label">Beginner</span>
    </label>
    <label class="radio-wrapper">
      <input type="radio" name="experience" value="intermediate" class="radio">
      <span class="radio-label">Intermediate</span>
    </label>
    <label class="radio-wrapper">
      <input type="radio" name="experience" value="advanced" class="radio">
      <span class="radio-label">Advanced</span>
    </label>
  </div>
  <span class="input-helper">Select your coding experience level</span>
</div>
```

### Example 2: Project Card with Analytics

```html
<div class="project-card">
  <div class="project-card-header">
    <div>
      <h3 class="project-card-title">awesome-ml-toolkit</h3>
      <span class="badge badge-primary">Python</span>
    </div>
    <button class="btn-ghost" style="padding: 0.5rem;">
      <svg><!-- Bookmark icon --></svg>
    </button>
  </div>
  
  <p class="project-card-description">
    A comprehensive toolkit for machine learning practitioners with easy-to-use APIs
    and extensive documentation.
  </p>
  
  <div class="project-card-tags">
    <span class="tag">Machine Learning</span>
    <span class="tag">Beginner Friendly</span>
    <span class="tag">Active</span>
  </div>
  
  <div class="project-card-footer">
    <div class="flex items-center gap-4">
      <span class="body-small">⭐ 2.4k</span>
      <span class="body-small">🍴 340</span>
      <span class="badge badge-success">Good First Issues: 12</span>
    </div>
  </div>
</div>
```

### Example 3: Analytics Dashboard

```html
<div class="stats-grid">
  <div class="analytics-card">
    <div class="analytics-card-header">
      <span class="analytics-card-title">Activity Score</span>
      <span class="badge badge-success">↑ 12%</span>
    </div>
    <div class="analytics-card-value">8.7</div>
    <div class="analytics-card-label">Above average</div>
  </div>
  
  <div class="analytics-card">
    <div class="analytics-card-header">
      <span class="analytics-card-title">Avg Response Time</span>
    </div>
    <div class="analytics-card-value">2.4h</div>
    <div class="analytics-card-label">Maintainer response</div>
  </div>
  
  <div class="analytics-card">
    <div class="analytics-card-header">
      <span class="analytics-card-title">Success Rate</span>
      <span class="badge badge-success">Excellent</span>
    </div>
    <div class="analytics-card-value">94%</div>
    <div class="analytics-card-label">PRs merged</div>
  </div>
</div>
```

### Example 4: Search and Filter Interface

```html
<div class="search-bar">
  <div style="position: relative; flex: 1;">
    <svg style="position: absolute; left: 1rem; top: 50%; transform: translateY(-50%);">
      <!-- Search icon -->
    </svg>
    <input 
      type="text" 
      class="search-input" 
      placeholder="Search projects by name, language, or topic..."
    >
  </div>
  <button class="filter-button">
    <svg><!-- Filter icon --></svg>
    Filters
  </button>
</div>

<div class="filter-panel">
  <div class="filter-section">
    <h4 class="filter-title">Language</h4>
    <div class="filter-options">
      <label class="checkbox-wrapper">
        <input type="checkbox" class="checkbox">
        <span class="checkbox-label">JavaScript</span>
      </label>
      <label class="checkbox-wrapper">
        <input type="checkbox" class="checkbox">
        <span class="checkbox-label">Python</span>
      </label>
      <label class="checkbox-wrapper">
        <input type="checkbox" class="checkbox">
        <span class="checkbox-label">TypeScript</span>
      </label>
    </div>
  </div>
  
  <div class="filter-section">
    <h4 class="filter-title">Activity Level</h4>
    <div class="filter-options">
      <label class="checkbox-wrapper">
        <input type="checkbox" class="checkbox">
        <span class="checkbox-label">Very Active</span>
      </label>
      <label class="checkbox-wrapper">
        <input type="checkbox" class="checkbox">
        <span class="checkbox-label">Active</span>
      </label>
    </div>
  </div>
  
  <div class="filter-actions">
    <button class="btn-primary btn-sm">Apply Filters</button>
    <button class="btn-ghost btn-sm">Clear All</button>
  </div>
</div>
```

### Example 5: User Profile

```html
<div class="profile-card">
  <div class="avatar avatar-xl">
    <img src="avatar.jpg" alt="User Avatar">
  </div>
  
  <h3 class="profile-card-name">Alex Johnson</h3>
  <p class="profile-card-username">@alexjohnson</p>
  
  <p class="profile-card-bio">
    Full-stack developer passionate about open source.
    Love working on developer tools and web frameworks.
  </p>
  
  <div class="project-card-tags">
    <span class="tag">JavaScript</span>
    <span class="tag">React</span>
    <span class="tag">Node.js</span>
  </div>
  
  <div class="profile-card-stats">
    <div class="profile-stat">
      <div class="profile-stat-value">24</div>
      <div class="profile-stat-label">Contributions</div>
    </div>
    <div class="profile-stat">
      <div class="profile-stat-value">8</div>
      <div class="profile-stat-label">Projects</div>
    </div>
    <div class="profile-stat">
      <div class="profile-stat-value">152</div>
      <div class="profile-stat-label">Stars</div>
    </div>
  </div>
</div>
```

---

## Dark Mode Support (Optional)

If implementing dark mode in the future, use these color tokens:

```css
@media (prefers-color-scheme: dark) {
  :root {
    /* Primary Colors */
    --blue-950: #edf5fd;
    --blue-900: #d6e7fa;
    --blue-800: #a3c7f2;
    --blue-700: #70a8e8;
    --blue-600: #4d90db;
    --blue-500: #3178c3;
    --blue-400: #2563a4;
    --blue-300: #1a4d85;
    --blue-200: #143a66;
    --blue-100: #0d2847;
    --blue-50: #0a1929;
    
    /* Backgrounds */
    --gray-50: #0f1419;
    --gray-100: #1a1f26;
    --gray-200: #2d3642;
    
    /* Inverted for dark mode */
    --white: #0f1419;
    --black: #ffffff;
  }
}
```

---

## Implementation Notes

### CSS Variables
All color and spacing values use CSS custom properties for easy theming and maintenance.

### Component Naming
- Use BEM-inspired naming: `.component-element-modifier`
- Keep class names descriptive and semantic
- Prefix utility classes when needed

### Responsive Breakpoints
```css
/* Mobile First Approach */
--breakpoint-sm: 640px;   /* Small devices */
--breakpoint-md: 768px;   /* Medium devices */
--breakpoint-lg: 1024px;  /* Large devices */
--breakpoint-xl: 1280px;  /* Extra large devices */
--breakpoint-2xl: 1536px; /* 2X large devices */
```

### Animation Timing
```css
--transition-fast: 0.15s;
--transition-base: 0.2s;
--transition-slow: 0.3s;
--transition-slower: 0.5s;
```

### Z-Index Scale
```css
--z-base: 0;
--z-dropdown: 100;
--z-sticky: 200;
--z-modal: 1000;
--z-toast: 2000;
--z-tooltip: 3000;
```

---

## Additional Resources

### Icons
Recommended icon library: **Lucide Icons** or **Heroicons**
- Consistent stroke width (2px)
- Available in multiple sizes
- Matches the clean aesthetic

### Illustrations
Consider using abstract, geometric illustrations with the blue and orange color palette for:
- Empty states
- Error pages
- Onboarding screens
- Feature highlights

### Code Syntax Highlighting
For code blocks and examples, use a theme that complements the blue color palette:
- **Recommended**: One Dark Pro or Night Owl theme
- Syntax highlighting should use muted colors that don't compete with the UI

---

## Version History

- **v1.0.0** (January 2026) - Initial style guide creation
  - Established color palette with matte blue and orange
  - Defined typography system with Inter and JetBrains Mono
  - Created comprehensive component library
  - Established spacing and layout patterns
  - Added accessibility guidelines

---

## Feedback & Updates

This style guide is a living document. As the OSS Project Analyzer evolves, update this guide to reflect new patterns, components, and design decisions. Consider versioning major changes to maintain consistency across the platform.

For questions or suggestions, contact the design team or open an issue in the project repository.
