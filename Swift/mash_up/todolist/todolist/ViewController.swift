//
//  ViewController.swift
//  todolist
//
//  Created by YunHee Lee on 2018. 5. 19..
//  Copyright © 2018년 YunHee Lee. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    var tableView: UITableView = {
        let tableView: UITableView = UITableView.init(fram: .zero, style: .grouped)
        tableView.translatesAutoresizingMaskIntoConstraints = fales
        tableView.delegate = self
        tableView.dataSource = self
        return tableView
    }()
    override func viewDidLoad() {
        super.viewDidLoad()
        
        view.addSubview(tableView)
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    extension ViewController: UITableViewDelegate, UITableViewDataSource{
        func tableView(_ tableView: UITAbleVIew, cellForRowAt indexPath: IndeexPath) ->
            UITableViewCell {
                return UITableViewCell()
        }
    }
}

