//
//  ViewController.swift
//  MyProject
//
//  Created by snow on 2018. 4. 21..
//  Copyright © 2018년 snow. All rights reserved.
//

import UIKit

class ViewController: UITableViewController {
    
    let cellData = [CellData(name: "이설희", residence: "중랑구")
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return cellData.count
    }
    
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "Cell") as! Cell
        cell.nameLabel.text = cellData[indexPath.row].name
        cell.residenceLabel.text = cellData[indexPath.row].residence
//      1)
//      if cell.residenceLabel.text == nil {
//          cell.residenceLabel.text = "거주지 없음"
////    }
//      2)
//      if let residence = cellData[indexPath.row].residence {
//          cell.residenceLabel.text = cellData[indexPath.row].residence
//      }else{
//          cell.residenceLabel.text = "거주지 없음"
//      }
//      3)
        cell.residenceLabel.text = cellData[indexPath.row].residence ?? "거주지 없음"
        return cell
        
    }

}

class Cell: UITableViewCell {
    
    @IBOutlet weak var nameLabel: UILabel!
    @IBOutlet weak var residenceLabel: UILabel!
    
}

struct CellData {
    
    var name: String
    var residence: String?
    
    init(name: String, residence: String?) {
        self.name = name
        self.residence = residence
    }
    
}

