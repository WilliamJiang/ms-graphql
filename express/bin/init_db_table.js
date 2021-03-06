#!/usr/bin/env node

const path = require('path')
const sqlite3 = require('sqlite3').verbose()

/**
 * DB: blog.db
 * Table: blogs
 */
const dbpath = path.resolve(path.join(__dirname, 'blog.db'))

const database = new sqlite3.Database(dbpath, err => {
	if (err) console.error(err.message)
	console.log(`Connected to DB ${database}`)
})

database.run(`
	CREATE TABLE IF NOT EXISTS blogs (
		id integer PRIMARY KEY,
		title text,
		description text,
		createDate text,
		author text
	)
`)

database.close()
