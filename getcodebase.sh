#!/bin/bash

# Get the current date and time in YYYY-MM-DD-HHMM format
TIMESTAMP=$(date +%Y-%m-%d-%H%M)

# Define the output filename
OUTPUT_FILE="codebase-${TIMESTAMP}.txt"

echo "Creating codebase snapshot: ${OUTPUT_FILE}"
echo "-------------------------------------"

# Clear the output file before appending
> "$OUTPUT_FILE"

# Find all .html, .css, and .js files in the current directory
# and concatenate their content into the output file, with separators.
# The 'find' command ensures only regular files in the current directory are included.
find . -maxdepth 1 -type f \( -name "*.html" -o -name "*.css" -o -name "*.js" \) -print0 | while IFS= read -r -d $'\0' file; do
    echo "--- Appending content from: $file ---" >> "$OUTPUT_FILE"
    cat "$file" >> "$OUTPUT_FILE"
    echo -e "\n\n------------------------------\n\n" >> "$OUTPUT_FILE" # Add two CRs, separator, and two more CRs
done

# Check if the file was created successfully and report
if [ -f "$OUTPUT_FILE" ]; then
    echo "Snapshot created successfully!"
    echo "Content from the following files has been added to ${OUTPUT_FILE}:"
    # List the files that were included
    find . -maxdepth 1 -type f \( -name "*.html" -o -name "*.css" -o -name "*.js" \) -print
else
    echo "Error: Failed to create the codebase snapshot."
fi

echo "-------------------------------------"
