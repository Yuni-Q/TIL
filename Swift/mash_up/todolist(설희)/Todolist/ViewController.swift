//
//  ViewController.swift
//  Todolist
//
//  Created by snow on 2018. 5. 19..
//  Copyright © 2018년 snow. All rights reserved.
//

import UIKit

var data = [1, 2, 3, 4, 5]

class ViewController: UIViewController {
    
    @IBOutlet weak var tableView: UITableView!

    override func viewDidLoad() {
        super.viewDidLoad()
        tableView.delegate = self
        tableView.dataSource = self
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    @IBAction func add(_ sender: Any) {
        data.append(data.count + 1)
        tableView.reloadData()
        
        let indexPath = IndexPath(row: data.count - 1, section: 0)
        tableView.scrollToRow(at: indexPath, at: .bottom, animated: true)
    }
    
}

extension ViewController: UITableViewDelegate, UITableViewDataSource {
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return data.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        guard let cell = tableView.dequeueReusableCell(withIdentifier: "Cell", for: indexPath) as? Cell else {
            return UITableViewCell()
        }
        cell.nameLabel.text = "\(data[indexPath.row])"
        return cell
    }
    
}

class Cell: UITableViewCell {
    
    @IBOutlet weak var nameLabel: UILabel!
    
}

