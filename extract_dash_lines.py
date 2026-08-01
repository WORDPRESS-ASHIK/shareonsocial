import os
import re

for root, dirs, files in os.walk('src/data'):
    for file in files:
        if file.endswith('.ts'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
                lines = content.split('\n')
                for i, line in enumerate(lines):
                    if '-' in line:
                        # Skip if it's a slug, className, url, or bullet point
                        if 'slug:' in line or 'slug"' in line or 'className=' in line or 'href=' in line or 'http' in line:
                            continue
                        if re.match(r'^\s*-\s+', line) or re.match(r'^\s*"-\s+', line):
                            continue
                        # Skip if it's an import or export
                        if line.startswith('import ') or line.startswith('export '):
                            continue
                        # If the line contains a word hyphen word, print it
                        if re.search(r'[a-zA-Z]-[a-zA-Z]', line) or re.search(r'\s-\s', line):
                            print(f"{file}:{i+1}: {line.strip()}")
