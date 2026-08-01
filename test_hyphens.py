import os
import re

hyphen_chars = [
    ('\u00AD', 'Soft Hyphen'),
    ('\u2010', 'Hyphen'),
    ('\u2011', 'Non-Breaking Hyphen'),
    ('\u2012', 'Figure Dash'),
    ('\u2013', 'En Dash'),
    ('\u2014', 'Em Dash'),
    ('\u2015', 'Horizontal Bar'),
    ('\u2027', 'Hyphenation Point'),
    ('\u2043', 'Hyphen Bullet'),
    ('\u2212', 'Minus Sign'),
    ('\uFE58', 'Small Em Dash'),
    ('\uFE63', 'Small Hyphen-Minus'),
    ('\uFF0D', 'Fullwidth Hyphen-Minus')
]

for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith(('.ts', '.tsx', '.md', '.json', '.css')):
            path = os.path.join(root, file)
            try:
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    for idx, line in enumerate(content.split('\n')):
                        for char, name in hyphen_chars:
                            if char in line:
                                print(f"{path}:{idx+1} contains {name}: {line.strip()}")
            except Exception as e:
                pass
