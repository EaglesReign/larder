# larder
CMP237 Demo Larder Manager Project

This code is intended to provide a number of examples of the use of the 
various array functions when applied to a real-world dataset.

The dataset in my case keeps track of items in a larder, or food storage area.  For each item in my larder, I keep an "ID" (this could be a barcode), name, quantity, 
units for the quantity, date placed in the larder, shelf life (expressed in days), and any remarks about the item, e.g. "This stock is not yet salted."

Here are a couple of example entries from my dataset:

'{ "labelID": "27", "name": "butter", "quantity": 2, "units": "lb", "dateIn": "2/1/15", "life": 20  }  
'{ "labelID": "32", "name": "Mexican rice", "quantity": 1, "units": "gl", "remark:" UNSALTED!!", "dateIn": "1/28/15", "life": 20  }',

The repo contains these code examples, among other things:

* Routine to read a single data item from terminal and print it in object format
* Routine to continuously read data items until user hits ENTER for first field
* Sample filter looking for items with a shelf life of more than 10 days (easy)
* Sample filter looking for expired items (hard)
* Sample showing reduce to find the item with the longest shelf life
