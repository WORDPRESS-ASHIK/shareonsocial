import os
import re

files_modified = 0
for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith(('.ts', '.tsx', '.md', '.json')):
            path = os.path.join(root, file)
            try:
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Check if it has em-dash or en-dash
                if '—' in content or '–' in content:
                    # Replace optional whitespace around em/en dash with a single space
                    new_content = re.sub(r'\s*[—–]\s*', ' ', content)
                    
                    with open(path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    files_modified += 1
                    print(f"Modified: {path}")
            except Exception as e:
                print(f"Error modifying {path}: {e}")

print(f"Total files modified: {files_modified}")
