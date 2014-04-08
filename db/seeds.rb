# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

require "csv"
#coding utf-8

#Delete all data
House.delete_all
#Initialize auto_increment
House.connection.execute("delete from sqlite_sequence where name='houses'")
#Insert data in housed_data_50_nocolumnname
CSV.foreach('./public/data/house_data_nocolumnname.csv') do |row|
	House.create(
		:house => row[0],
		:firstname => row[1],
		:lastname => row[2],
		:city => row[3],
		:n_of_people => row[4],
		:has_child => row[5]
	)
end

#Delete all data
Energylog.delete_all
#Initialize auto_increment
Energylog.connection.execute("delete from sqlite_sequence where name='energylogs'")
#Insert data in dataset_50_nocolumnname
CSV.foreach('./public/data/dataset_50_nocolumnname.csv') do |row|
	Energylog.create(
		:id2 => row[0],
		:label => row[1],
		:house_id => row[2],
		:year => row[3],
		:month => row[4],
		:templature => row[5],
		:daylight => row[6],
		:energyproduction => row[7]
	)
end