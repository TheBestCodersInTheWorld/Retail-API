const pool = require("../connection/db");

class RetailModel {
    constructor() {
    }

    /**
     * Create a query that shows what stores in <STATE NAME> have sold what items.
     * In particular, it should show the store ID, store address, item ID, and item description.  
     * We do not want any duplicate entries. Rows should be listed with increasing store IDs, 
     * and then within a given store ID, with increasing item IDs.
     */
    static getStoreSalesInState(req, res) {
        pool.query(
            "SELECT Distinct Store.Store_id, Store.Store_Address, Item.Item_id, Item.Item_description " +
            "FROM Store " +
            "INNER JOIN Purchase ON Store.Store_id = Purchase.Store_id " +
            "INNER JOIN PurchItem ON Purchase.Purch_id = PurchItem.Purch_id " +
            "INNER JOIN Item ON PurchItem.Item_id = Item.Item_id " +
            "WHERE Store.State_id = $1 " +
            "ORDER BY Store.Store_id, Item.Item_id;",
            [
                req.state
            ],
            (err, record) => {
                if (err) {
                    console.log("error: ", err);
                    res(err, null);
                } else {
                    res(null, record);
                }
            }
        )
    }
}