import db from "./db.js";

export async function addPhone(req, res) {
  const { brand, price, year } = req.body;

  const { rows } = await db.query(
    `insert into phones (brand, price, year) values ('${brand}', ${price}, ${year}) returning *`,
  );

  res.json({ data: rows[0] });
}

export async function getPhones(req, res) {
  const { limit, offset } = req.query;

  let query = "select * from phones ";

  if (limit !== undefined) {
    query += `limit ${limit} `;
  }

  if (offset !== undefined) {
    query += `offset ${offset} `;
  }

  const { rows } = await db.query(query);

  res.json(rows);
}

export async function getPhoneById(req, res) {
  const { id } = req.params;

  const { rows } = await db.query(`select * from phones where id = ${id}`);

  res.json(rows);
}

export async function updatePhoneById(req, res) {
  const { id } = req.params;
  const { brand, price, year } = req.body;

  const response = await db.query(
    `update phones set brand = '${brand}', price = ${price}, year = ${year} where id = ${id} returning *`,
  );

  console.log(response);

  res.json({ success: true });
}

export async function deletePhoneById(req, res) {
  const { id } = req.params;

  const response = await db.query(`delete from phones where id = ${id} returning *`);

  console.log(response);

  res.json({ success: true });
}
