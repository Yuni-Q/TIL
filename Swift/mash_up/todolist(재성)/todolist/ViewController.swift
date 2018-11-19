//
//  ViewController.swift
//  todolist
//
//  Created by 이재성 on 2018. 5. 19..
//  Copyright © 2018년 kaskay. All rights reserved.
//

import UIKit

var data: [String] = ["1", "2", "3"]

class TableViewCell: UITableViewCell {
    private var didUpdateConstraints: Bool = false
    private var label: UILabel = {
        let label: UILabel = UILabel()
        label.translatesAutoresizingMaskIntoConstraints = false
        label.text = "abc"
        label.textColor = .blue
        return label
    }()
    
    func setTitle(text: String) {
        label.text = text
    }
    
    override func updateConstraints() {
        if !didUpdateConstraints {
            NSLayoutConstraint.activate([
                label.topAnchor.constraint(equalTo: contentView.topAnchor, constant: 10),
                label.leadingAnchor.constraint(equalTo: contentView.leadingAnchor, constant: 15),
                label.bottomAnchor.constraint(equalTo: contentView.bottomAnchor, constant: -10)
                ])
            
            didUpdateConstraints = true
        }
        
        super.updateConstraints()
    }
    
    override init(style: UITableViewCellStyle, reuseIdentifier: String?) {
        super.init(style: style, reuseIdentifier: reuseIdentifier)
        
        contentView.addSubview(label)
        contentView.setNeedsUpdateConstraints()
    }
    
    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
}

class ViewController: UIViewController {
    @IBAction func addAction(_ sender: Any) {
        data.append("\(data.count + 1)")
        
        tableView.reloadData()
        tableView.scrollToRow(at: IndexPath.init(row: data.count - 1, section: 0), at: .bottom, animated: true)
    }
    
    var didUpdateConstraints: Bool = false
    lazy var tableView: UITableView = {
        let tableView: UITableView = UITableView.init(frame: .zero, style: .plain)
        tableView.translatesAutoresizingMaskIntoConstraints = false
        tableView.register(TableViewCell.self, forCellReuseIdentifier: "TableViewCell")
        tableView.delegate = self
        tableView.dataSource = self
        tableView.isEditing = true
        return tableView
    }()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        view.addSubview(tableView)
        view.updateConstraintsIfNeeded()
    }
    
    override func updateViewConstraints() {
        if !didUpdateConstraints {
            NSLayoutConstraint.activate([
                tableView.topAnchor.constraint(equalTo: view.topAnchor),
                tableView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
                tableView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
                tableView.bottomAnchor.constraint(equalTo: view.bottomAnchor)
                ])
            
            didUpdateConstraints = true
        }
        
        super.updateViewConstraints()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
}

extension ViewController: UITableViewDelegate, UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return data.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        guard let cell = tableView.dequeueReusableCell(withIdentifier: "TableViewCell", for: indexPath) as? TableViewCell else { return UITableViewCell() }
        cell.setTitle(text: "\(data[indexPath.row])")
        
        return cell
    }
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        let cell = tableView.cellForRow(at: indexPath)
        tableView.deselectRow(at: indexPath, animated: true)
        
        cell?.accessoryType = .checkmark
    }
}
