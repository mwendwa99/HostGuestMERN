import ItemContent from '../models/itemContent.js';


export const getItems = async (req, res) => {
    try {
        const itemContents = await ItemContent.find({},
            function (err, data) {
                console.log(err, data, data.length);
            });

        res.status(200).json(itemContents);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}



