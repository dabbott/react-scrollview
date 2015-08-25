BIN = ./node_modules/.bin

# publish-gh-pages:
# 	git checkout gh-pages
# 	git merge master gh-pages
# 	gulp build
# 	git add --all .
# 	git commit -m "New release"
# 	git push origin gh-pages
# 	git checkout master

publish-gh-pages:
	git checkout master
	gulp build:site
	git subtree split --prefix site/public -b gh-pages
	git checkout gh-pages
	cp -r site/public/* .
	rm -r site
	git add --all .
	git commit -m "New release"
	git push -f origin gh-pages:gh-pages
	git checkout master
	git branch -D gh-pages

