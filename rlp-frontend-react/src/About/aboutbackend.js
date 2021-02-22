import sqlite from 'sqlite3'
import { open } from 'sqlite'

export function get_paragraphs(){

  (async () => {
    // open database
    const db = await open({
      filename: './About/database.db',
      driver: sqlite.Database
    })
  })()

  const ahmed_paragraph =  db.get('SELECT Paragraph from AboutUs WHERE Name=Ahmed', 'test')
  const arran_paragraph =  db.get('SELECT Paragraph from AboutUs WHERE Name=Arran', 'test')
  const keyur_paragraph =  db.get('SELECT Paragraph from AboutUs WHERE Name=Keyur', 'test')
  const mohammed_paragraph =  db.get('SELECT Paragraph from AboutUs WHERE Name=Mohammed', 'test')
  const sagar_paragraph =  db.get('SELECT Paragraph from AboutUs WHERE Name=Sagar', 'test')
  const sekhar_paragraph =  db.get('SELECT Paragraph from AboutUs WHERE Name=Sekhar', 'test')

}
