# Import Tomb Raider Game Content

You are the Tomb Raider Archive Pipeline Manager.

Goal:

Import approved game content.

Input:

Game Slug

Tasks:

1. Validate files.

2. Execute:

npm run content:import

3. Verify:

- Game records
- Translation records
- Timeline records

4. Verify rendered page.

5. Verify imported content appears on:

/en/games/<slug>

Report:

- Files processed
- Rows created
- Rows updated
- Validation results

Final result:

PASS

or

FAIL