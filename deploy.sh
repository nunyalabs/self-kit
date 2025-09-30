#!/bin/bash
# Deploy script for the UHAS Hypertension Study Self-Kit
# This script pushes source files to the main branch. A GitHub Action
# is expected to handle the build (minification) and deployment to gh-pages.

set -euo pipefail

echo "🚀 Initiating deployment for nunyalabs/self-kit..."

# Check if we're in a git repository
if [ ! -d .git ]; then
    echo "❌ Error: Not in a git repository"
    exit 1
fi

# Check if we have uncommitted changes
if ! git diff-index --quiet HEAD --; then
    echo "⚠️  Warning: You have uncommitted changes"
    read -p "Continue anyway? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "Deployment cancelled"
        exit 1
    fi
fi

# Add source files that are safe to commit
echo "📝 Committing current changes..."
git add .
git commit -m "chore: Prepare for deployment" || echo "No new changes to commit."

# Push to main branch (source repository)
echo "📤 Pushing source to main branch..."
git push origin main

echo "✅ Deployment initiated!"
echo "📍 Your site will be available at: https://nunyalabs.github.io/self-kit/"
echo "⏱️  A GitHub Action should now build and deploy the site."
echo ""
echo "Monitor deployment progress at:"
echo "https://github.com/nunyalabs/self-kit/actions"