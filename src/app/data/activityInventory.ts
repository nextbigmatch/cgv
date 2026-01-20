// 180-ITEM LIVE ACTIVITY INVENTORY FOR CORE GROW VISION
// Updates every 20 seconds | No repeat within 1 hour | Restarts after 1 hour

export const activityInventory = [
  // FRONTEND DEVELOPMENT (1-30)
  "Fixing responsive layout issues",
  "Adjusting mobile navigation spacing",
  "Refining button interaction states",
  "Resolving CSS overflow issues",
  "Improving hero section alignment",
  "Updating reusable UI components",
  "Testing layout across screen sizes",
  "Cleaning unused CSS rules",
  "Improving accessibility contrast",
  "Refining typography hierarchy",
  "Fixing broken hover interactions",
  "Improving animation smoothness",
  "Resolving layout shift issues",
  "Optimizing component reusability",
  "Reviewing UI consistency",
  "Improving card grid alignment",
  "Testing dark mode layouts",
  "Refactoring UI components",
  "Improving spacing system",
  "Fixing responsive image scaling",
  "Resolving header alignment issues",
  "Improving mobile touch targets",
  "Adjusting navigation dropdown behavior",
  "Fixing icon alignment issues",
  "Improving form field layout",
  "Resolving flexbox conflicts",
  "Optimizing font loading",
  "Testing cross-browser rendering",
  "Improving visual hierarchy",
  "Refining animation easing",

  // BACKEND & SYSTEM WORK (31-60)
  "Reviewing backend API responses",
  "Optimizing database queries",
  "Fixing API error handling",
  "Improving server response time",
  "Refactoring backend services",
  "Reviewing authentication logic",
  "Improving data validation",
  "Fixing API timeout issues",
  "Updating backend dependencies",
  "Improving system logging",
  "Fixing data sync issues",
  "Reviewing backend security rules",
  "Optimizing caching strategy",
  "Improving API documentation",
  "Fixing database indexing",
  "Reviewing data models",
  "Improving error reporting",
  "Fixing backend warnings",
  "Optimizing server performance",
  "Improving API reliability",
  "Fixing form submission issues",
  "Reviewing backend workflows",
  "Improving database integrity",
  "Fixing data duplication bugs",
  "Updating backend configurations",
  "Improving request handling",
  "Fixing webhook issues",
  "Improving system scalability",
  "Reviewing server logs",
  "Fixing permission issues",

  // SEO & PERFORMANCE (61-90)
  "Optimizing meta titles",
  "Improving meta descriptions",
  "Fixing SEO indexing issues",
  "Improving page speed scores",
  "Optimizing internal linking",
  "Fixing broken links",
  "Improving URL structure",
  "Optimizing heading hierarchy",
  "Improving image alt tags",
  "Fixing crawl errors",
  "Improving mobile SEO",
  "Optimizing schema markup",
  "Fixing canonical issues",
  "Improving page load time",
  "Reviewing SEO audit results",
  "Optimizing content structure",
  "Improving keyword placement",
  "Fixing sitemap issues",
  "Improving Core Web Vitals",
  "Optimizing lazy loading",
  "Fixing redirect chains",
  "Improving SEO performance",
  "Updating SEO metadata",
  "Improving site crawlability",
  "Fixing duplicate content issues",
  "Improving page indexing",
  "Optimizing page titles",
  "Fixing structured data errors",
  "Improving SEO health",
  "Reviewing search console data",

  // MOBILE APP WORK (91-120)
  "Testing mobile app UI flows",
  "Optimizing app load performance",
  "Fixing UI state issues",
  "Reviewing app navigation logic",
  "Improving touch interactions",
  "Resolving device-specific bugs",
  "Preparing app release builds",
  "Updating app UI components",
  "Testing cross-device behavior",
  "Improving app stability",
  "Fixing app layout issues",
  "Optimizing app memory usage",
  "Improving app responsiveness",
  "Fixing gesture conflicts",
  "Reviewing app performance",
  "Improving app animations",
  "Fixing app crash logs",
  "Optimizing app bundle size",
  "Improving app load times",
  "Fixing touch target sizes",
  "Reviewing app architecture",
  "Improving app navigation flow",
  "Fixing app state management",
  "Optimizing app rendering",
  "Improving offline functionality",
  "Fixing app sync issues",
  "Reviewing app security",
  "Improving app data caching",
  "Fixing app orientation bugs",
  "Optimizing app startup time",

  // UX & DESIGN QUALITY (121-150)
  "Reviewing user behavior patterns",
  "Improving content clarity",
  "Refining call-to-action placement",
  "Reducing friction points",
  "Improving navigation hierarchy",
  "Validating UI consistency",
  "Testing interaction flows",
  "Reviewing usability feedback",
  "Refining design spacing",
  "Improving visual hierarchy",
  "Fixing UX bottlenecks",
  "Optimizing user journeys",
  "Improving form usability",
  "Refining content flow",
  "Testing user scenarios",
  "Improving readability",
  "Fixing confusing UI elements",
  "Optimizing conversion paths",
  "Improving page scannability",
  "Refining UI patterns",
  "Testing accessibility features",
  "Improving design consistency",
  "Fixing navigation confusion",
  "Optimizing mobile UX",
  "Improving interaction design",
  "Refining visual design",
  "Testing usability improvements",
  "Improving content hierarchy",
  "Fixing UX pain points",
  "Optimizing page layouts",

  // TESTING & QA (151-180)
  "Testing form submissions",
  "Validating user inputs",
  "Checking error messages",
  "Testing edge cases",
  "Reviewing test coverage",
  "Fixing failing tests",
  "Improving test reliability",
  "Testing cross-browser compatibility",
  "Validating data integrity",
  "Checking security vulnerabilities",
  "Testing mobile responsiveness",
  "Reviewing QA checklists",
  "Fixing regression bugs",
  "Improving test automation",
  "Testing performance benchmarks",
  "Validating business logic",
  "Checking accessibility compliance",
  "Testing user workflows",
  "Reviewing bug reports",
  "Fixing critical issues",
  "Improving quality assurance",
  "Testing integration points",
  "Validating API contracts",
  "Checking data accuracy",
  "Testing load handling",
  "Reviewing test results",
  "Fixing test failures",
  "Improving test coverage",
  "Testing error handling",
  "Validating input sanitization"
];

// Helper to get activity by index (0-179)
export const getActivity = (index: number): string => {
  return activityInventory[index % 180];
};

// Helper to highlight keywords in activity text
export const highlightKeywords = (text: string): { text: string; isKeyword: boolean }[] => {
  const keywords = [
    'Fixing', 'Optimizing', 'Improving', 'Refining', 'Resolving', 'Updating',
    'Testing', 'Reviewing', 'Validating', 'Checking', 'Monitoring', 'Analyzing',
    'API', 'SEO', 'UI', 'UX', 'CSS', 'performance', 'database', 'backend',
    'frontend', 'mobile', 'app', 'deployment', 'security', 'accessibility'
  ];
  
  const parts: { text: string; isKeyword: boolean }[] = [];
  let remainingText = text;
  
  while (remainingText.length > 0) {
    let foundKeyword = false;
    
    for (const keyword of keywords) {
      const lowerRemaining = remainingText.toLowerCase();
      const lowerKeyword = keyword.toLowerCase();
      const index = lowerRemaining.indexOf(lowerKeyword);
      
      if (index === 0) {
        parts.push({ text: remainingText.slice(0, keyword.length), isKeyword: true });
        remainingText = remainingText.slice(keyword.length);
        foundKeyword = true;
        break;
      }
    }
    
    if (!foundKeyword) {
      parts.push({ text: remainingText[0], isKeyword: false });
      remainingText = remainingText.slice(1);
    }
  }
  
  return parts;
};
