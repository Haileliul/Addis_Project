Run the Docker Container
After building the Docker image, you can run it in a container:

bash
Copy code

# docker run -p 3000:3000 my-express-app

This command maps port 3000 on your local machine to port 3000 inside the container. You should now be able to access your Express.js app at http://localhost:3000.

6. Optional: Run in Detached Mode
   If you want to run the container in the background (detached mode), use the -d flag:

bash
Copy code

# docker run -d -p 3000:3000 my-express-app

7.Stop and Remove the Container
When you're done, you can stop the container:

bash
Copy code

# docker ps # Get the container ID

# docker stop <container_id>

You can also remove the container if you no longer need it:

bash
Copy code

# docker rm <container_id>

Now your Express.js backend is containerized and ready to run in Docker! If you have any more questions or need further assistance, feel free to ask.

---

6. Start and Enable Docker
   Start Docker and ensure it runs on boot:

bash
Copy code
sudo systemctl start docker
sudo systemctl enable docker

---

6. Verify the Installation
   Check that MongoDB is running:

bash
Copy code
sudo systemctl status mongod
You should see a message indicating that MongoDB is active and running.

---

Here is a list of commonly used commands in `mongosh`, the MongoDB shell. These commands allow you to interact with your MongoDB databases, collections, and documents.

### **Basic Database Commands**

1. **Show Databases:**

   ```javascript
   show dbs
   ```

   Lists all available databases.

2. **Switch to a Database:**

   ```javascript
   use <database_name>
   ```

   Switches to the specified database. If the database does not exist, it will be created when you insert the first document.

3. **Show Collections:**
   ```javascript
   show collections
   ```
   Lists all collections in the current database.

### **CRUD Operations**

#### **Create**

1. **Insert a Single Document:**

   ```javascript
   db.<collection_name>.insertOne({<document>})
   ```

   Example:

   ```javascript
   db.users.insertOne({ name: "John Doe", age: 30 });
   ```

2. **Insert Multiple Documents:**
   ```javascript
   db.<collection_name>.insertMany([{<document1>}, {<document2>}])
   ```
   Example:
   ```javascript
   db.users.insertMany([
     { name: "Jane Doe", age: 28 },
     { name: "Alice", age: 25 },
   ]);
   ```

#### **Read**

1. **Find All Documents in a Collection:**

   ```javascript
   db.<collection_name>.find()
   ```

   Example:

   ```javascript
   db.users.find();
   ```

2. **Find a Specific Document:**

   ```javascript
   db.<collection_name>.findOne({<query>})
   ```

   Example:

   ```javascript
   db.users.findOne({ name: "John Doe" });
   ```

3. **Find Documents with a Query:**

   ```javascript
   db.<collection_name>.find({<query>})
   ```

   Example:

   ```javascript
   db.users.find({ age: { $gt: 25 } });
   ```

4. **Find with Projection (Specific Fields):**
   ```javascript
   db.<collection_name>.find({<query>}, {<projection>})
   ```
   Example:
   ```javascript
   db.users.find({ age: { $gt: 25 } }, { name: 1, _id: 0 });
   ```

#### **Update**

1. **Update a Single Document:**

   ```javascript
   db.<collection_name>.updateOne({<query>}, {<update>})
   ```

   Example:

   ```javascript
   db.users.updateOne({ name: "John Doe" }, { $set: { age: 31 } });
   ```

2. **Update Multiple Documents:**

   ```javascript
   db.<collection_name>.updateMany({<query>}, {<update>})
   ```

   Example:

   ```javascript
   db.users.updateMany({ age: { $gt: 25 } }, { $set: { status: "active" } });
   ```

3. **Replace a Document:**
   ```javascript
   db.<collection_name>.replaceOne({<query>}, {<replacement_document>})
   ```
   Example:
   ```javascript
   db.users.replaceOne({ name: "John Doe" }, { name: "John", age: 31 });
   ```

#### **Delete**

1. **Delete a Single Document:**

   ```javascript
   db.<collection_name>.deleteOne({<query>})
   ```

   Example:

   ```javascript
   db.users.deleteOne({ name: "John Doe" });
   ```

2. **Delete Multiple Documents:**
   ```javascript
   db.<collection_name>.deleteMany({<query>})
   ```
   Example:
   ```javascript
   db.users.deleteMany({ age: { $lt: 25 } });
   ```

### **Index Commands**

1. **Create an Index:**

   ```javascript
   db.<collection_name>.createIndex({<field>: <1 or -1>})
   ```

   Example:

   ```javascript
   db.users.createIndex({ name: 1 });
   ```

2. **List All Indexes:**

   ```javascript
   db.<collection_name>.getIndexes()
   ```

3. **Drop an Index:**
   ```javascript
   db.<collection_name>.dropIndex("<index_name>")
   ```
   Example:
   ```javascript
   db.users.dropIndex("name_1");
   ```

### **Collection Management Commands**

1. **Drop a Collection:**

   ```javascript
   db.<collection_name>.drop()
   ```

   Example:

   ```javascript
   db.users.drop();
   ```

2. **Rename a Collection:**
   ```javascript
   db.<collection_name>.renameCollection("<new_name>")
   ```
   Example:
   ```javascript
   db.users.renameCollection("customers");
   ```

### **Database Management Commands**

1. **Drop a Database:**

   ```javascript
   db.dropDatabase();
   ```

   Drops the currently selected database.

2. **Create a Collection:**
   ```javascript
   db.createCollection("<collection_name>");
   ```
   Example:
   ```javascript
   db.createCollection("orders");
   ```

### **Aggregation and Advanced Queries**

1. **Aggregation:**

   ```javascript
   db.<collection_name>.aggregate([{<stage1>}, {<stage2>}, ...])
   ```

   Example:

   ```javascript
   db.orders.aggregate([
     { $match: { status: "active" } },
     { $group: { _id: "$customerId", total: { $sum: "$amount" } } },
   ]);
   ```

2. **Count Documents:**
   ```javascript
   db.<collection_name>.countDocuments({<query>})
   ```
   Example:
   ```javascript
   db.users.countDocuments({ age: { $gt: 25 } });
   ```

### **Miscellaneous Commands**

1. **Get Database Stats:**

   ```javascript
   db.stats();
   ```

2. **Get Collection Stats:**

   ```javascript
   db.<collection_name>.stats()
   ```

3. **Get Server Status:**
   ```javascript
   db.serverStatus();
   ```

These commands cover the majority of tasks you'll need to perform when working with MongoDB through `mongosh`. If you need more advanced commands or further assistance, feel free to ask!
