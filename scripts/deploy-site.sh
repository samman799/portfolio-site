#!/bin/bash
set -e

# Deploy Website Script
# Checks for missing assets and pushes to main branch

echo "🔍 Checking for untracked project assets..."

# Check if any project folders have content files not in git
untracked_count=0

for project_dir in content/projects/*/; do
  project_name=$(basename "$project_dir")

  # Skip template and Adobe files
  if [[ "$project_name" == "project-template" ]] || [[ "$project_name" == *".aep"* ]]; then
    continue
  fi

  # Check for common asset types that should be tracked
  for asset in "$project_dir"/*.{jpg,png,svg,webp,mp4,md}; do
    if [ -f "$asset" ]; then
      if ! git ls-files --error-unmatch "$asset" > /dev/null 2>&1; then
        echo "  ⚠️  Untracked: $asset"
        ((untracked_count++))
      fi
    fi
  done

  # Check subdirectories
  for subdir in "$project_dir"*/; do
    if [ -d "$subdir" ]; then
      for asset in "$subdir"/*.{jpg,png,svg,webp,mp4}; do
        if [ -f "$asset" ]; then
          if ! git ls-files --error-unmatch "$asset" > /dev/null 2>&1; then
            echo "  ⚠️  Untracked: $asset"
            ((untracked_count++))
          fi
        fi
      done
    fi
  done
done

if [ $untracked_count -gt 0 ]; then
  echo ""
  echo "❌ Found $untracked_count untracked asset(s)"
  echo "Please add and commit these files before deploying:"
  echo "  git add content/projects/"
  echo "  git commit -m 'Add/update project assets'"
  exit 1
fi

echo "✅ All assets tracked"
echo ""
echo "📤 Pushing to main branch..."
git push origin main

echo "✅ Deployment complete!"
echo "The website will be live at: https://samman799.github.io/portfolio-site"
