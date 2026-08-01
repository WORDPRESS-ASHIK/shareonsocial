import os
import re

words = set()
for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith(('.ts', '.tsx', '.json', '.md')):
            path = os.path.join(root, file)
            try:
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    matches = re.findall(r'[a-zA-Z]+-[a-zA-Z]+', content)
                    for m in matches:
                        words.add(m.lower())
            except:
                pass

for w in sorted(words):
    print(w)
